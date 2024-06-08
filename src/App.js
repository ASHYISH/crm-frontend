import React from "react";
import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
import { DafaultLayout } from "./layout/DafaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddOrder } from "./pages/new-order/AddOrder.page";
import { OrderLists } from "./pages/order-list/OrderLists.page";

function App() {
  return (
    <div className="App">
      <DafaultLayout>
        {/* <Dashboard /> */}
        {/* <AddOrder /> */}
        <OrderLists />
      </DafaultLayout>
    </div>
  );
}

export default App;
