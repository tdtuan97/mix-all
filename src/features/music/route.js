import {HomePage} from "./";
import {App} from "./";

export default {
    path: "music",
    component: App,
    childRoutes: [{path: "home", component: HomePage, isIndex: true}]
};