import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
}>();

blogRouter.post("/blog", (c) => {
  return c.text("Blog Create");
});

blogRouter.put("/blog", (c) => {
  return c.text("Blog Update");
});

blogRouter.get("/blog/:id", (c) => {
  const id = c.req.param("id");
  return c.text("Blog");
});

blogRouter.get("/bulk", (c) => {
  return c.text("Blogs");
});
