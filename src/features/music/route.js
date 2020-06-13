import {HomePage} from "./";
import {Layout} from "./";

export default {
    path: "music",
    component: Layout,
    childRoutes: [{path: "home", component: HomePage, isIndex: true}]
};