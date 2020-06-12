// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import LoginPage from "./LoginPage";
import RegisterPage from "./Register";
import Layout from "./Layout";

export default [
    {
        path: "login",
        component: Layout,
        childRoutes: [
            {path: "", component: LoginPage, isIndex: true}
        ]
    },
    {
        path: "register",
        component: Layout,
        childRoutes: [
            {path: "", component: RegisterPage, isIndex: true}
        ]
    }
];