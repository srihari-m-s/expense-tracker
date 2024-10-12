import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign_up")({
  component: () => <div>Hello /_auth/sign_up!</div>,
});
