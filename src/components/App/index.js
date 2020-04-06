import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import SignUp from "../SignUp/signUp";

const App =()=>(
    <Router>
        <div>
            app
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
        </div>
    </Router>
);

export default App;