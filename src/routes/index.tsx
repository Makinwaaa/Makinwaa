import Home from "pages/LandingPage/Home";
import RouteNotFound from "pages/RouteNotFound";
import Contact from "pages/LandingPage/Contact";

export interface routeInterface {
    path: string;
    name: string;
    header?: string;
    exact?: boolean;
    component?: any;
    breadcrumb?: { title: string, link: string }[];
    children?: Array<routeInterface>;
}

const landingPageRoutes: routeInterface = {
    path: "/",
    name: "Landing Page",
    children: [
        {
            path: "/",
            name: "Home",
            header: "Home",
            component: Home
        },
        {
            path: "/home",
            name: "Home",
            header: "Home",
            component: Home
        },
        {
            path: "/contact",
            name: "Contact",
            header: "Contact",
            component: Contact
        }
    ]
}

const routeNotFound: routeInterface = {
    breadcrumb: [{ title: "Route Not Found", link: "home" }],
    path: "/*",
    name: "Route Not Found",
    header: "Route Not Found",
    component: RouteNotFound,
};

export const landingPageScreens: Array<routeInterface> = [landingPageRoutes];
export const routeNotFoundScreen: Array<routeInterface> = [routeNotFound];