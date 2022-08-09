import "@testing-library/jest-dom/extend-expect";

import { server } from "../mocks/server";
const fetchPolifill = require("whatwg-fetch");

global.fetch = fetchPolifill.fetch;

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
