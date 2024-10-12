import { useEffect } from "react";

import { expensesApi } from "./api/index.ts";

function App() {
  useEffect(() => {
    fetch("/api/expenses/total-spent");
    async function fetchTotal() {
      const res = await expensesApi["total-spent"].$get();
      const data = await res.json();
      console.log(data);
    }

    fetchTotal();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-red-500">Hello</h1>
      </div>
    </>
  );
}

export default App;
