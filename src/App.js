import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
import { DafaultLayout } from "./layout/DafaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddOrder } from "./pages/new-order/AddOrder.page";
import { OrderLists } from "./pages/order-list/OrderLists.page";
import { Order } from "./pages/order/Order.page";

function App() {
  return (
    <div className="App">
      <Router>
        <DafaultLayout>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-order" element={<AddOrder />} />
            <Route path="/orders" element={<OrderLists />} />
            <Route path="/order/:tId" element={<Order />} />
          </Routes>
        </DafaultLayout>
      </Router>
    </div>
  );
}

export default App;
