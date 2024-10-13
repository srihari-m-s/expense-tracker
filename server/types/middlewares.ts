import { JwtVariables } from "hono/jwt";

export type Variables = JwtVariables & { userId: string };

export type PrivateApp = { Variables: Variables };
