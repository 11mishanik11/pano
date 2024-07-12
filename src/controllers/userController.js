import userService from "../services/userService.js";
import {CreateUserBodyDto, LoginUserBodyDto} from "../utils/dtos/UserDto.js";
import {User} from "../db/index.js";


class UserController {

  async registration (req, res, next) {
    try {
      const createUserBodyDto = new CreateUserBodyDto(req.body)
      const user = await userService.registration(createUserBodyDto)

      res.status(200).json(user)
    } catch (e) {
      next(e)
    }
  }
  async login (req, res, next) {
    try {
      const loginUserBodyDto = new LoginUserBodyDto(req.body);
      const user = await userService.login(loginUserBodyDto);

      res.status(200).json(user)
    } catch (e) {
      next(e)
    }
  }

  async auth (req, res, next) {
    try {
      // const user = await userService.auth(req.user.id)
      res.status(200).json('All right.')
    } catch (e) {
      next(e)
    }
  }
}

export default new UserController()