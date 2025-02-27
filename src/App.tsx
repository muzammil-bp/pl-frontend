import { useState } from "react";
import { OrderSummary } from "./Components/OrderSummary";

function App() {
  return (
    <>
      <OrderSummary
        name="Example"
        email="example@bitspro.com"
        paymentTerms="Payment Terms"
        phone="+92 00000000"
        po="00000000071 "
        deliveryMethod="Cash on Delivery"
      />
    </>
  );
}

export default App;
