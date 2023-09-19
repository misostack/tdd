export class LoginRequestDto {
  email!: string;
  password!: string;
}

export class LoginResponseSuccessDto {
  token!: string;
  user!: {
    id: string;
  };
}

export class LoginResponseErrorDto {
  errorCode!: string;
  errorMessage!: string;
}

export type LoginResponseDto = LoginResponseSuccessDto | LoginResponseErrorDto;
