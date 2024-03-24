export default class CustomError extends Error {
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    this.name = 'CustomError';
  }
}
