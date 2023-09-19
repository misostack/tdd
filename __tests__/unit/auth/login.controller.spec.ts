import LoginController from "@/auth/login.controller";
import { container } from "tsyringe";
describe("Login with email and password", () => {
  let loginController: LoginController;
  beforeAll(() => {
    loginController = container.resolve(LoginController);
  });
  describe("Login test", () => {
    /**
     * The 'correct email and password scenario'
     * @input {email: 'example@jsbase.net', password: '123456'}
     * @AcceptanceCriteria action has been proccessed sucessfully
     */
    it("return a login success response with correct email and password", () => {
      const payload = loginController.login({
        email: "example@jsbase.net",
        password: "123456",
      });
      expect(payload).toStrictEqual({
        token: "",
        user: {
          id: "",
        },
      });
    });
  });
});
