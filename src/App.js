import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HirePage from "./components/Hiring/HirePage";
import OffersPage from "./components/Offers/OffersPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route path="/" exact component={OffersPage} />
          <Route path="/hire" component={HirePage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
