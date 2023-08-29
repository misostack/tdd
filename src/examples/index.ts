export class Example {
  title!: string;
  constructor(payload: Partial<Example>) {
    Object.assign(this, payload);
  }
}

const examples: Example[] = [];
examples.push(new Example({ title: "Example 1" }));
examples.forEach((example) => {
  console.log(example);
});
