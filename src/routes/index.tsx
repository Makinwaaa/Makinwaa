import Home from "pages/LandingPage/Home";
import RouteNotFound from "pages/RouteNotFound";
import Contact from "pages/LandingPage/Contact";
import About from "pages/LandingPage/About";
import Resume from "pages/LandingPage/Resume";
import Portfolio from "pages/LandingPage/Portfolio";
import CaseStudy from "pages/LandingPage/CaseStudy";

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
        },
        {
            path: "/about",
            name: "About",
            header: "About",
            component: About
        },
        {
            path: "/resume",
            name: "Resume",
            header: "Resume",
            component: Resume
        },
        {
            path: "/works",
            name: "Works",
            header: "Works",
            component: Portfolio
        },
        {
            path: "/works/:slug",
            name: "Case Study",
            header: "Case Study",
            component: CaseStudy
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