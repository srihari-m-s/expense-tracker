import { userApi } from "@/api/auth";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_auth/login")({
  component: () => (
    <div>
      Hello /_auth/login!
      <Login />
    </div>
  ),
});

function Login(): JSX.Element {
  useEffect(() => {
    const postUser = async () => {
      const response = await userApi.login.$post({
        json: { username: "hari@example.com", password: "admin1234" },
      });
      const data = await response.text();
      alert(data);
    };

    postUser();
  }, []);

  return <></>;
}
