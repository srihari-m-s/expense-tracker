import { useQuery } from "@tanstack/react-query";
import { EXPENSES } from "./api/queryKeys";
import { expensesApi } from "./api/expenses";

function App() {
  const { data, error } = useQuery({
    queryKey: EXPENSES.totalSpent,
    queryFn: async () => {
      const res = await expensesApi[":id{[0-10]+}"].$get({
        param: { id: "1" },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <div className="container">
        <h1>Landing Page</h1>
        <h1 className="text-gray-300">{JSON.stringify(data, null, "10")}</h1>

        <h1 className="text-red-300">{JSON.stringify(error, null, "10")}</h1>
      </div>
    </>
  );
}

export default App;
