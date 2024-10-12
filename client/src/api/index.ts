import { ApiRoutes } from "@server/src/app";
import expenses from "@server/src/routes/expenses";
import { hc } from "hono/client";

const client = hc<ApiRoutes>("/");

const expensesApi = hc<typeof expenses>("/api/expenses");

export { expensesApi, client };
