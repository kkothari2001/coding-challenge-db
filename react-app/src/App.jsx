import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Dash from "./pages/Dash";
import TableCard from "./components/TableCard/TableCard";
import data from "./data"


const App = () => {
  return (
    <ChakraProvider>
      <TableCard title="Bond details" headers={["Bond ID", "ISIN", "Issuer", "Maturity Date", "Coupon", "Type", "Face Value", "Issue"]} data={data} />
    </ChakraProvider>
  );
};

export default App;
