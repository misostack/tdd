export class Example {
  title!: string;
  constructor(payload: Partial<Example>) {
    Object.assign(this, payload);
  }
}
