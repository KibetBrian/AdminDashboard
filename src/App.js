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
import { useSelector } from 'react-redux'
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import ProductDetails from "./Components/Pages/ProductDetailsPage/ProductDetails";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";

function App() {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <>    
        <Router>
            <Route path="/login">
                {user ? <Redirect to ="/" />: <LoginPage />}  
            </Route>
          {user ? <TopBar/>: <Redirect to = "login" />}

          {user ?           
          <div className="sideBarAndMainContainer">
        {user ?  <SideBar/>: < Redirect to = "/login" />}
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/users">
              <UserList/>
            </Route>
            <Route exact path="/product-list">
              <ProductPage />
            </Route>
            <Route exact path="/users/userdata/">
              <UserData/>    
            </Route>
            <Route exact path="/users/userdata/newuser">
              <NewUser/>
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails />
            </Route>    
            <Route exact path="/add-product">
              <AddProduct />
            </Route>          
          </Switch>
          </div>: <Redirect to = "/login"></Redirect>}
        </Router>      
    </>
  );
}

export default App;
