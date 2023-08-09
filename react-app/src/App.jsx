import React, { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { InfoIcon, WarningIcon } from "@chakra-ui/icons"
import TableCard from "./components/TableCard/TableCard";
import Selector from "./components/Selector/Selector";
// import newdata from "./temp-data.json"
import newdata from "./bond_info.json"


const App = () => {
  const [mainData, setMainData] = useState({ matured: [], unmatured: [] })
  return (
    <ChakraProvider>
      <Flex width="100%" height="100vh" wrap="wrap" justifyContent='center'>

        <Selector flex='1' setData={setMainData} />
        <Flex flexDir={"column"} maxW='100%' justifyContent="space-between" alignItems="stretch" flex='1'>
          <TableCard
            height={'50vh'}
            title="Matured Bond Details"
            icon={<WarningIcon margin='10px' color='red' w='20px' h='20px' />}
            external_headers={['ISIN', 'CUSIP', 'Issuer', 'Maturity Date', 'Coupon', 'Type', 'Face Value']}
            internal_headers={['Counter Party', 'Price', 'Date', 'Status']}
            data={mainData.matured} />
          <TableCard
            height={'50vh'}
            title="Maturing Soon Bond Details"
            icon={<InfoIcon margin='10px' color='orange.200' w='20px' h='20px' />}
            external_headers={['ISIN', 'CUSIP', 'Issuer', 'Maturity Date', 'Coupon', 'Type', 'Face Value']}
            internal_headers={['Counter Party', 'Price', 'Date', 'Status']}
            data={mainData.unmatured} />

        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
