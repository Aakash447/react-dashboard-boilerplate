import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import LayoutAdmin from "./views/admin/LayoutAdmin";
import HomePage from "./views/front/HomePage";
import "scss/App.scss";
import SidebarMobile from "views/admin/SidebarMobile";
import Test from "views/front/Test";
import { useState } from "react";
import Test2 from "views/front/Test2";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={LayoutAdmin} />
          <Route path="/test" component={Test2} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
