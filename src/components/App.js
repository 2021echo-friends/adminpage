import { BrowserRouter, Route, Switch } from "react-router-dom";
import AttendenceQuizPage from "./views/Pages/AttendenceQuizPage/AttendenceQuizPage";
import CustomerPage from "./views/Pages/CustomerPage/CustomerPage";
import CustomerEditPage from "./views/Pages/CustomerPage/CustomerEditPage";
import EcoPointPage from "./views/Pages/EcoPointPage/EcoPointPage";
import EventPage from "./views/Pages/EventPage/EventPage";
import EventWritten from "./views/Pages/EventPage/EventWritten";
import LoginPage from "./views/Pages/LoginPage";
import MainPage from "./views/Pages/MainPage";
import ProductPage from "./views/Pages/ProductPage/ProductPage";
import ProductEditPage from "./views/Pages/ProductPage/ProductEditPage";
import ProductAddPage from "./views/Pages/ProductPage/ProductAddPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/customer" component={CustomerPage} />
        <Route exact path="/customer/edit" component={CustomerEditPage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/product/edit" component={ProductEditPage} />
        <Route exact path="/product/new" component={ProductAddPage} />
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/eventwritten" component={EventWritten} />
        <Route exact path="/quiz" component={AttendenceQuizPage} />
        <Route exact path="/ecopoint" component={EcoPointPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
