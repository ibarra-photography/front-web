import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:4000/api/v1/upload", (req, res, ctx) => {
    console.log("mocking uploads...");
    return res(ctx.json({ response: { status: 200, data: "File uploaded" } }));
  }),
];
