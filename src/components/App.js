import { BrowserRouter, Route, Switch } from "react-router-dom";
import AttendenceQuizPage from "./views/Pages/AttendenceQuizPage";
import CustomerPage from "./views/Pages/CustomerPage";
import EcoPointPage from "./views/Pages/EcoPointPage";
import EventPage from "./views/Pages/EventPage";
import LoginPage from "./views/Pages/LoginPage";
import MainPage from "./views/Pages/MainPage";
import ProductPage from "./views/Pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/customer" component={CustomerPage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/quiz" component={AttendenceQuizPage} />
        <Route exact path="/ecopoint" component={EcoPointPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
