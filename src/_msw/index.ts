import { setupWorker, rest } from "msw";
import { createMovies } from "./handler";
export const worker = setupWorker(
  rest.get("/movies/:titleId", () => {}),
  rest.post("/write", createMovies)
);
