import userService from "../services/userService.js";
import {CreateUserBodyDto, LoginUserBodyDto} from "../utils/dtos/UserDto.js";


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
}

export default new UserController()