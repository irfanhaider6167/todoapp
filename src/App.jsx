import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/todoContex";

// Lazy Load Layout
const Layout = lazy(() => import("./layout/Layout"));

// Loading Component
function Loading() {
  return (
    <div className="flex items-center justify-center h-screen text-xl font-semibold">
      Loading...
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
