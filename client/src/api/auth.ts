import { hc } from "hono/client";
import user from "@server/routes/user";

const userApi = hc<typeof user>("/api/user");
type UserApi = typeof userApi;

export { userApi, type UserApi };
