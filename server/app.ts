import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "@hono/node-server/serve-static";
import "dotenv/config";

import test from "./routes/test";
import expenses from "./routes/expenses";
import user from "./routes/user";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api");

apiRoutes.route("/test", test);
apiRoutes.route("/expenses", expenses);
apiRoutes.route("/user", user);

app.use("*", serveStatic({ root: "./client/dist" }));
app.use("*", serveStatic({ root: "./client/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
