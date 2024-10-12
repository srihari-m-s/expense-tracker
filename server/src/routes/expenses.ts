import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const fakeExpenses: Array<Expense> = [
  { id: 1, title: "Games", amount: 1299 },
  { id: 2, title: "Groceries", amount: 3000 },
  { id: 3, title: "Fuel", amount: 2000 },
];

const expenseSchema = z.object({
  id: z.number().min(1).positive(),
  title: z.string().min(4).max(100),
  amount: z.number().min(1).positive(),
});

type Expense = z.infer<typeof expenseSchema>;

const createExpenseSchema = expenseSchema.omit({ id: true });

const expenses = new Hono()
  .get("/", async (c) => {
    return c.json(fakeExpenses);
  })
  .post("/", zValidator("json", createExpenseSchema), async (c) => {
    const expense = await c.req.valid("json");
    const payload = { ...expense, id: fakeExpenses.length + 1 };
    fakeExpenses.push(payload);
    c.status(201);
    return c.json(payload);
  })
  .get("/:id{[0-10]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const expense = fakeExpenses.find((item) => item.id === id);
    if (!expense) {
      return c.notFound();
    }
    return c.json(expense);
  })
  .delete("/:id{[0-10]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const index = fakeExpenses.findIndex((item) => item.id === id);
    if (index === -1) {
      return c.notFound();
    }

    const deletedExpense = fakeExpenses.splice(index, 1)[0];
    return c.json(deletedExpense);
  })
  .get("/total-spent", async (c) => {
    const totalSpent = fakeExpenses.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
    return c.json({ total: totalSpent });
  });

export default expenses;
