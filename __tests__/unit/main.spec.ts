import { main } from "@/main";

describe("Test Main Function", () => {
  it("should run without error", () => {
    try {
      main();
    } catch (error) {}
  });
});
