import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { PrivateApp } from "../types/middlewares";

export const getToken = createMiddleware<PrivateApp>(async (c, next) => {
  const payload = c.get("jwtPayload");

  try {
    const result = await verify(payload, process.env.JWT_SECRET!);
    c.set("userId", "");
  } catch (error) {}
});
