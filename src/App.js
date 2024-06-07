import React from "react";
import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
import { DafaultLayout } from "./layout/DafaultLayout";

function App() {
  return (
    <div className="App">
      <DafaultLayout>Dashboard</DafaultLayout>
    </div>
  );
}

export default App;
