import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: () => (
    <div>
      Hello /_auth!
      <Outlet />
    </div>
  ),
});
