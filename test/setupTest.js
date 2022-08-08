import "@testing-library/jest-dom/extend-expect";

import { server } from "../mocks/server";

beforeAll(() => {
  console.log("listening...");
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
