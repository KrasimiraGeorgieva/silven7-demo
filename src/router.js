import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home"
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import Prices from "./components/Prices";
import About from "./components/About";
import News from "./components/News";
Vue.use(Router);

export default new Router({
    mode: 'history',
    base:process.env.BASE_URL,
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/services",
            name: "services",
            component: Services
        },
        {
            path: "/prices",
            name: "prices",
            component: Prices
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contacts",
            name: "contacts",
            component: Contacts
        },
        {
            path: "/news",
            name: "news",
            component: News
        }
    ]
})