import { Example } from "./examples";

interface TestDrivenDevelopmentGuideline {
  title: string;
  version: string;
  author: string;
}

const main = () => {
  const guideline: TestDrivenDevelopmentGuideline = {
    title: "Test Driven Development Guidelines 2023",
    version: "2023-09",
    author: "jsbase",
  };
  const examples: Example[] = [];
  examples.push(new Example({ title: "Example 1" }));
  examples.forEach((example) => {
    console.log(example);
  });
  console.log(guideline);
};

main();
