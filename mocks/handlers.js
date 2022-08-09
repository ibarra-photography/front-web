import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:4000/api/v1/upload", (req, res, ctx) => {
    return res(ctx.status(202));
  }),

  rest.get("https://localhost:4000/api/v1/photos", (req, res, ctx) => {
    return res(ctx.status(202));
  }),

  rest.post("http://localhost/api/v1/upload", (req, res, ctx) => {
    return res(JSON.parse(ctx.status));
  }),
];
