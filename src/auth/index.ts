import "reflect-metadata";

import LoginController from "./login.controller";
import { container } from "tsyringe";

const main = () => {
  const loginController = container.resolve(LoginController);
  const response = loginController.login({ email: "example", password: "123" });
  console.log(response);
};

main();
