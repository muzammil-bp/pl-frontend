import { useState } from "react";
import { OrderSummary } from "./Components/OrderSummary";
import VerticalStepper from "./Components/VerticalStepper/VerticalStepper";
import CreateRole from "./Components/CreateRole";
import ProgressTracker from "./Components/ProgressTracker";

function App() {
  return (
    <>
      {/* <OrderSummary
        name="Example"
        email="example@bitspro.com"
        paymentTerms="Payment Terms"
        phone="+92 00000000"
        po="00000000071 "
        deliveryMethod="Cash on Delivery"
      /> */}

      {/* <VerticalStepper /> */}
      {/*  */}
      {/* <CreateRole /> */}
      <ProgressTracker />
    </>
  );
}

export default App;
