import { Fragment } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <Outlet />
    </Fragment>
  ),
});
