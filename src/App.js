import "./App.css";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import MainLogin from "./components/MainLogin";
import SettingPage from "./components/SettingPage";
import AccountPage from "./components/AccountPage";
import UserManagement from "./components/UserManagement";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Route path="/" component={MainLogin} exact></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/home" component={Main}></Route>
        <Route path="/setting" component={SettingPage}></Route>
        <Route path="/account" component={AccountPage}></Route>
        <Route path="/userManagement" component={UserManagement}></Route>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
