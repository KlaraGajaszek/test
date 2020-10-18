export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);

    this.message = message;
  }

  message: string;
  status = 404;
}
