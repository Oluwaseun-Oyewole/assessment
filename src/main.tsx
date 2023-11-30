import { ChakraProvider } from "@chakra-ui/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Loader from "./common/components/loader/index.tsx";
import { routes } from "./common/routes/index.tsx";
import "./index.css";
import { ContextProvider } from "./modules/dashboard/context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextProvider>
        <Suspense fallback={<Loader screen />}>
          <RouterProvider router={routes} fallbackElement={<Loader screen />} />
        </Suspense>
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
