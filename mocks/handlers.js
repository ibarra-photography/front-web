import { rest } from "msw";

export const handlers = [
  rest.post(
    "/uploads",
    (req, res, ctx) => {
      // Persist user's authentication in the session

      sessionStorage.setItem("is-authenticated", "true");

      return res(
        // Respond with a 200 status code

        ctx.status(200)
      );
    },
    rest.post("http://localhost:4000/api/v1/upload", (req, res, ctx) => {
      console.log("Mocking API uploads");
      return res(ctx.status(200));
    })
  ),
];
