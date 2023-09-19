import { autoInjectable } from "tsyringe";
import AuthService from "./auth.service";
import { LoginRequestDto, LoginResponseDto } from "./login.dto";

@autoInjectable()
export default class LoginController {
  constructor(private authService: AuthService) {}
  login(payload: LoginRequestDto): LoginResponseDto {
    return this.authService.loginWithCredentials(payload);
  }
}
