export class CreateUserBodyDto {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
  }
}

export class CreateUserResDto {
  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.role = user.role;
  }
}

export class LoginUserBodyDto {
  constructor(user) {
    this.email = user.email;
    this.password = user.password;
  }
}

export class LoginUserResDto {
  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.role = user.role;
  }
}