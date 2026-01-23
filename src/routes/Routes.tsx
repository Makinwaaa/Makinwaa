import LandingPageLayout from "layouts/LangingPageLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { landingPageScreens, routeInterface, routeNotFoundScreen } from "routes";

const childRoutes = (Layout: any, routes: Array<any>) =>
    routes.map(
        (
            { children, path, component: Component, name, breadcrumb }: routeInterface,
            index: number
        ) =>
            children ? (
                // Route item with children
                children.map(
                    (
                        { path, component: Component, name, breadcrumb }: routeInterface,
                        index: number
                    ) => (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout breadcrumb={breadcrumb}>
                                    <Component ComponentName={name} />
                                </Layout>
                            }
                        />
                    )
                )
            ) : (
                // Route item without children
                <Route
                    key={index}
                    path={path}
                    element={
                        <Layout breadcrumb={breadcrumb}>
                            <Component ComponentName={name} />
                        </Layout>
                    }
                />
            )
    );


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {childRoutes(LandingPageLayout, landingPageScreens)}
                {childRoutes(LandingPageLayout, routeNotFoundScreen)}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
