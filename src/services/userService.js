import bcrypt from "bcrypt";
import {User} from "../db/index.js";
import {ResponseUserDto} from "../utils/dtos/UserDto.js";
import tokenService from "./tokenService.js";
import ApiError from "../utils/ApiError/ApiError.js";

class UserService {
  async registration ({email, password}) {
      const findUser = await User.findOne({where: {email}});

      if (findUser) {
          throw ApiError.BadRequest('Пользователь с такой почтой уже существует')
      }

      const hashPassword = await bcrypt.hash(password, 7);

      const user = await User.create({email, password: hashPassword})
      const responseUserDto = new ResponseUserDto(user);
      const token = tokenService.generateToken({...responseUserDto})

      return {...token, user: responseUserDto}
  }
  
  async login ({email, password}) {
    const user = await User.findOne({where: {email}});

    if (!user) {
        throw ApiError.AuthorizationError()
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
        throw ApiError.AuthorizationError()
    }

    const responseUserDto = new ResponseUserDto(user)
    const token = tokenService.generateToken({...responseUserDto})
    return {...token, user: responseUserDto}
  }
}

export default new UserService()