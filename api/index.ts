import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ message: "Hello from Hono!" }));

export default async (req, res) => {
  const response = await app.fetch(req);
  res.status(response.status);
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }
  const body = await response.text();
  res.send(body);
};
