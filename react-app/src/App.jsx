import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { InfoIcon, WarningIcon } from "@chakra-ui/icons"
import TableCard from "./components/TableCard/TableCard";
import Selector from "./components/Selector/Selector";
// import newdata from "./temp-data.json"
import newdata from "./bond_info.json"


const App = () => {
  // console.log(newdata)
  return (
    <ChakraProvider>
      <Flex width="100%" height="100vh" wrap="wrap" justifyContent='center'>

        {/* <Box bg='tomato' minW='300px' flex='1'> Settings and filters</Box> */}
        <Selector flex='1' />
        <Flex flexDir={"column"} maxW='100%' justifyContent="space-between" alignItems="stretch" flex='1'>
          <TableCard
            height={'50vh'}
            title="Matured Bond Details"
            icon={<WarningIcon margin='10px' color='red' w='20px' h='20px' />}
            external_headers={['ISIN', 'CUSIP', 'Issuer', 'Maturity Date', 'Coupon', 'Type', 'Face Value']}
            internal_headers={['Counter Party', 'Price', 'Date', 'Status']}
            data={newdata.slice(1, 2)} />
          <TableCard
            height={'50vh'}
            title="Maturing Soon Bond Details"
            icon={<InfoIcon margin='10px' color='orange.200' w='20px' h='20px' />}
            external_headers={['ISIN', 'CUSIP', 'Issuer', 'Maturity Date', 'Coupon', 'Type', 'Face Value']}
            internal_headers={['Counter Party', 'Price', 'Date', 'Status']}
            data={newdata.slice(10, 20)} />

        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
