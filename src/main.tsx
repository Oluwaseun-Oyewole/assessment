import { ChakraProvider } from "@chakra-ui/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./common/routes/index.tsx";
import "./index.css";
import { ContextProvider } from "./modules/dashboard/context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextProvider>
        <Suspense>
          <RouterProvider router={routes} />
        </Suspense>
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
