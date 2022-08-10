import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:4000/api/v1/upload", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("https://localhost:4000/api/v1/photos", (req, res, ctx) => {
    return res(ctx.status(202));
  }),

  rest.post(
    "http://localhost/undefined/api/v1/authenticate",
    (req, res, ctx) => {
      const { username, password } = req.body;

      if (
        username === "admin" &&
        password ===
          "d74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1"
      ) {
        return res(
          ctx.body(
            JSON.stringify({
              response: {
                status: 200,
                data: { token: "token.getToken()" },
              },
            })
          )
        );
      } else {
        return res(
          ctx.body(
            JSON.stringify({
              response: false,
              data: "unauthorized",
            })
          ),
          ctx.status(400)
        );
      }
    }
  ),

  rest.post("http://localhost:4000/api/v1/authenticate", (req, res, ctx) => {
    const { username, password } = req.body;

    if (
      username === "admin" &&
      password ===
        "d74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1"
    ) {
      return res(
        ctx.body(
          JSON.stringify({
            response: {
              status: 200,
              data: { token: "token.getToken()" },
            },
          })
        )
      );
    } else {
      return res(
        ctx.body(
          JSON.stringify({
            response: false,
            data: "unauthorized",
          })
        ),
        ctx.status(400)
      );
    }
  }),
];
