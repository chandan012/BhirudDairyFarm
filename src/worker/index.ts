import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text("Hello from Hono!");
});

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return app.fetch(request, env, ctx);
  },
};
