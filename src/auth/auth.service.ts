import { LoginRequestDto, LoginResponseDto } from "./login.dto";

export default class AuthService {
  loginWithCredentials(payload: LoginRequestDto): LoginResponseDto {
    return {
      token: "",
      user: {
        id: "",
      },
    };
  }
}
