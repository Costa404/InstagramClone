// src/Main/App.tsx
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import LoadingSpinner from "../SharedComponents/Loading/Loading";
import { useAppRoutes } from "../Routes/AppRoutes";

// Fallback para Suspense
const LoadingFallback = (
  <div>
    <LoadingSpinner />
  </div>
);

const App: React.FC = () => {
  const appRoutes = useAppRoutes(); // useAppRoutes é chamado aqui, dentro do componente React

  return (
    <Suspense fallback={LoadingFallback}>
      <RouterProvider router={appRoutes} />
    </Suspense>
  );
};

export default App;
