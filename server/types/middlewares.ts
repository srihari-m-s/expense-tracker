import { JwtVariables } from "hono/jwt";
import { SignatureKey } from "hono/utils/jwt/jws";

export type Variables = JwtVariables;

export type Bindings = {
  JWT_SECRET: SignatureKey;
};

export type PrivateApp = { Variables: Variables; Bindings: Bindings };
