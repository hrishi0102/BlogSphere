import { Hono } from "hono";

const app = new Hono();

app.post("/api/v1/user/signup", (c) => {
  return c.text("Signup");
});

app.post("/api/v1/signin", (c) => {
  return c.text("Signin");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Blog Create");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Blog Update");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text("Blog");
});

app.get("/api/v1/bulk", (c) => {
  return c.text("Blogs");
});

export default app;
