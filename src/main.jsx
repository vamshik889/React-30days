import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Context } from "./ContextAPI-modal/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./Router/context/AuthContext.jsx";
import { AppProvider } from "./TanstackQuery/Context.jsx";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import store from "./Redux/store1.js"
import {Provider} from "react-redux"
import store2 from "./ReduxToolkit/store2";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AppProvider>
    {/* <QueryClientProvider client={queryClient}> */}
      {/* <Provider store={store2}>  */} {/*un comment this for the redux toolkit */}

      <App />
      {/* </Provider> */}
      {/* <ReactQueryDevtools initialIsOpen={true}/> */}
    {/* </QueryClientProvider> */}
    {/* <BrowserRouter> */}

    {/* </BrowserRouter> */}
  </AppProvider>
);
