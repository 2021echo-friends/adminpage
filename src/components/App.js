import { BrowserRouter, Route, Switch } from "react-router-dom";
import AttendanceQuizPage from "./views/Pages/AttendanceQuizPage/AttendanceQuizPage";
import AttendanceQuizAddPage from "./views/Pages/AttendanceQuizPage/AttendanceQuizAddPage";
import AttendanceQuizEditPage from "./views/Pages/AttendanceQuizPage/AttendanceQuizEditPage";
import CustomerPage from "./views/Pages/CustomerPage/CustomerPage";
import CustomerEditPage from "./views/Pages/CustomerPage/CustomerEditPage";
import EcoPointPage from "./views/Pages/EcoPointPage/EcoPointPage";
import EventPage from "./views/Pages/EventPage/EventPage";
import EventAddPage from "./views/Pages/EventPage/EventAddPage";
import EventWrittenPage from "./views/Pages/EventPage/EventWrittenPage";
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
        <Route path="/customer/edit" component={CustomerEditPage} />
        <Route exact path="/product" component={ProductPage} />
        <Route path="/product/edit" component={ProductEditPage} />
        <Route exact path="/product/new" component={ProductAddPage} />
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/event/new" component={EventAddPage} />
        <Route path="/eventwritten" component={EventWrittenPage} />
        <Route exact path="/quiz" component={AttendanceQuizPage} />
        <Route exact path="/quiz/new" component={AttendanceQuizAddPage} />
        <Route path="/quiz/edit" component={AttendanceQuizEditPage} />
        <Route exact path="/ecopoint" component={EcoPointPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
