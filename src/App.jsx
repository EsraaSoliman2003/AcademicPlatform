import React from "react";
import AppRouter from "./router/AppRouter";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
