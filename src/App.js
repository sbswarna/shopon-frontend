import { Route, Switch } from "react-router-dom";
import AdminPanel from "./Login And Routing Components/components/admin-panel.component";
import Dashboard from "./Login And Routing Components/components/dashboard.component";
import Login from "./Login And Routing Components/components/login.component";
import Logout from "./Login And Routing Components/components/logout.component";
import Navbar from "./Login And Routing Components/components/navbar.component";
import PrivateRoute from "./Login And Routing Components/components/privateRoute.component";
import PublicRoute from "./Login And Routing Components/components/publicRoute.component";
import Admin from "./Login And Routing Components/components/Admin Panel/admin.js";
import Profile from "./Login And Routing Components/components/Admin Panel/profile";
import Permission from "./Login And Routing Components/components/Admin Panel/permission";
import Role from "./Login And Routing Components/components/Admin Panel/role.js";
import Service from "./Login And Routing Components/components/Admin Panel/service";

function App() {
    
    return (
        <div>
            <Navbar/>
            <Switch>
                <PublicRoute path="/login" component={Login}/>
                <PrivateRoute path="/logout" component={Logout}/>
                <PrivateRoute path="/platform/admin" component={Admin}/>
                <PrivateRoute path="/platform/profile" component={Profile}/>
                <PrivateRoute path="/platform/service" component={Service}/>
                <PrivateRoute path="/platform/role" component={Role}/>
                <PrivateRoute path="/platform/permission" component={Permission}/>
                <PrivateRoute path="/platform" component={AdminPanel}/>
                <PrivateRoute path="/" component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default App;
