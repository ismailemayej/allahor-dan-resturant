import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Roters/Rotes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={route} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
