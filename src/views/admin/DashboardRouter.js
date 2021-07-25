import React from "react";
import { Switch, Route } from "react-router-dom";
import Link1 from "views/admin/Link1/Link1";
import Link2 from "views/admin/Link2/Link2";
function DashboardRouter() {
  return (
    <>
      <Switch>
        <Route path="/admin/link1" component={Link1} />
        <Route path="/admin/link2" component={Link2} />
      </Switch>
    </>
  );
}

export default DashboardRouter;
