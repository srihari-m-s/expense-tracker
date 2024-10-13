import expenses from "@server/routes/expenses";
import { hc } from "hono/client";

const expensesApi = hc<typeof expenses>("/api/expenses");
type ExpensesApi = typeof expensesApi;

export { expensesApi, type ExpensesApi };
