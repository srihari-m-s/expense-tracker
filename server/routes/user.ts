import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";
import { z } from "zod";

const authSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8).max(100),
});

type Auth = z.infer<typeof authSchema>;

const userSchema = z.object({
  first_name: z.string().min(2).max(100),
  last_name: z.string().min(1).max(100).optional(),
  email: z.string().email(),
  mobile: z
    .string()
    .min(10)
    .max(10)
    .regex(/^[0-9]{10}/),
});

type User = z.infer<typeof userSchema>;

const resetPasswordSchema = z.object({
  email: z.string().email(),
});

const user = new Hono()
  .post("/sign_up", zValidator("json", userSchema), async (c) => {
    const userPayload = c.req.valid("json");
  })
  .post("/login", zValidator("json", authSchema), async (c) => {
    const authPayload = c.req.valid("json");
    const payload = {
      ...authPayload,
      exp:
        Math.floor(Date.now() / 1000) +
        60 * 60 * Number(process.env.TOKEN_EXPIRY_HOURS!),
    };
    const token = await sign(payload, process.env.JWT_SECRET!);

    setCookie(c, process.env.COOKIE_KEY!, token, { httpOnly: true });
    return c.text("Logged In!");
  })
  .post(
    "/reset_password",
    zValidator("json", resetPasswordSchema),
    async (c) => {
      const email = c.req.valid("json");
    }
  );

export default user;
