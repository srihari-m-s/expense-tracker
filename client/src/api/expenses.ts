import expenses from "@server/routes/expenses";
import { hc } from "hono/client";

const expensesApi = hc<typeof expenses>("/api/expenses");

export { expensesApi };

export type ExpensesApi = typeof expensesApi;
