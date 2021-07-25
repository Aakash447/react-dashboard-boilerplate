import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import LayoutAdmin from "./views/admin/LayoutAdmin";
import HomePage from "./views/front/HomePage";
import "scss/App.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={LayoutAdmin} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
