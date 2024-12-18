import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoProvider from "./context/TodoContext.tsx";
import ContainerProvider from "./context/ContainerContext.tsx";
import { Layout } from "./components/Layout.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ContainerProvider>
      <TodoProvider>
        <Layout />
      </TodoProvider>
    </ContainerProvider>
  </QueryClientProvider>
);
