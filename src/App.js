import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/SideBar/SideBar";
import "./app.css"
import HomePage from "./Components/Pages/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UserList from "./Components/Pages/HomePage/UserList/UserList";
import UserData from "./Components/Pages/UserDataPage/UserData";
import NewUser from "./Components/Pages/NewUser/NewUser";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import {store, persistor} from './Redux/store'
import { PersistGate } from 'redux-persist/es/integration/react'
import { useState } from "react";

function App() {
  const localData = localStorage.getItem("persist:root");
  const currentLocalUser = JSON.parse(localData).currentUser;
  const currentUser = JSON.parse(currentLocalUser);
  const user = currentUser.admin;
  return (
    <>
    <Provider store={store}>
      <PersistGate loading = "null" persistor={persistor}>
        <Router>
            <Route path="/login">
                {user ? <Redirect to ="/" />: <LoginPage />}  
            </Route>
          {user ? <TopBar/>: <Redirect to = "login" />}
          <div className="sideBarAndMainContainer">
        {user ?  <SideBar/>: < Redirect to = "/login" />}
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/users">
              <UserList/>
            </Route>
            <Route exact path="/users/userdata/">
              <UserData/>    
            </Route>
            <Route exact path="/users/userdata/newuser">
              <NewUser/>
            </Route>
          </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
