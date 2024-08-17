import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { NotFoundError } from '../error/not-found.error';

export const handleError: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ZodError) {
    return res.status(422).json(error.flatten());
  }
  if (error instanceof NotFoundError) {
    return res.status(404).json(error);
  }
  res
    .status(500)
    .json({ message: error instanceof Error ? error.message : undefined });
};
