import { Response } from "express";

export class ErrResponse {
  public error: string;
  public info: string;
  public status = 400;

  constructor(err: string, info: string, status = 400) {
    this.error = err;
    this.info = info;
    this.status = status;
  }
}

export default function (res: Response, body: any): Response {
  if ("error" in body) {
    return res.status(body?.status || 400).json({
      error: body?.error || "BAD_REQUEST",
      info: body?.info || "No information",
    });
  }

  const status = body?.status || 200;

  delete body.status;

  return res.status(status).json(body);
}
