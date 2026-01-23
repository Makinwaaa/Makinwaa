import { ConfigProvider } from "antd";
import { CustomThemeProvider } from "customHooks/ThemeContext";
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import React, { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import MainScreenLoader from "loaders/MainScreenLoader";

const AppRoutes = lazy(() => import('routes/Routes'));


function App() {
  return (
    <React.Suspense
      fallback={<MainScreenLoader />}
    >
      <CustomThemeProvider>
        <ThemeProvider
          theme={
            {
              primary: "#4141A4"
            }
          }>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#4141A4",
                colorPrimaryActive: "#4141A4",
              },
              components: {
                Timeline: {
                  tailColor: '#D8D8EA'
                }
              }
            }}
          >
            <AppRoutes />
            <ToastContainer />
          </ConfigProvider>
        </ThemeProvider>
      </CustomThemeProvider>
    </React.Suspense>
  );
}

export default App;
