export class CreateUserBodyDto {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
  }
}

export class LoginUserBodyDto {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
  }
}

export class ResponseUserDto {
  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.role = user.role;
  }
}