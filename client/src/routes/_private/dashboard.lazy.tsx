import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_private/dashboard")({
  component: () => <div>Hello /_private/dashboard!</div>,
});
