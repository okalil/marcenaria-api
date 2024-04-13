export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message ?? 'Não encontrado');
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return { message: this.message };
  }
}
