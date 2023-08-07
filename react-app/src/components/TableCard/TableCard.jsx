import { Card, CardHeader, CardBody, Text, Flex, Box, VStack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react"
import { Table, TableCaption, Thead, Tbody, Tr, Td, Th } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { Fragment, td } from "react"

const TableCard = (props) => {
    return (
        <Card width="50%" fontSize='0.8rem' border='2px solid rgba(0,0,0,0.1)' borderRadius='10px' margin="1rem" overflowX="scroll">
            <CardHeader padding='20px'>
                <Text fontWeight='bold' fontSize='1.8em'>{props.title}</Text>
            </CardHeader>
            <CardBody padding='0'>
                <Accordion allowMultiple allowToggle>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                {props.headers.map((header) => {
                                    return (<Td fontSize='1.2em' key={`${props.title}-${header}`}>{header}</Td>)
                                })}
                                <Td></Td>
                            </Tr>

                        </Thead>
                        <Tbody>


                            {props.data.map((bond) => {

                                return (

                                    <AccordionItem as={Fragment}>
                                        {
                                            ({ isExpanded }) => {
                                                return (
                                                    <>
                                                        <Tr key={`data-${bond.id}`}>
                                                            <Td width='15ch'>{bond.id}</Td>
                                                            <Td width='15ch'>{bond.isin}</Td>
                                                            <Td paddingRight='0'>
                                                                <Flex flexDirection='column' paddingRight='0'>
                                                                    <Text fontWeight='bold' fontSize='1em' paddingRight='0'>
                                                                        {bond.issuer.name}
                                                                    </Text>
                                                                    <Text fontWeight='light' fontSize='0.9em' paddingRight='0'>
                                                                        {bond.issuer.industry}
                                                                    </Text>
                                                                </Flex>
                                                            </Td>
                                                            <Td>{bond.maturity_date}</Td>
                                                            <Td>
                                                                <Text display='inline' fontSize='1.3em'>{bond.coupon.rate}
                                                                </Text>
                                                                <Text display='inline' fontSize='1em'>
                                                                    {" "}%{bond.coupon.unit}
                                                                </Text>
                                                            </Td>
                                                            <Td width='20ch'>
                                                                <VStack>
                                                                    {bond.type.map((type) => {
                                                                        return (
                                                                            <Tag size='sm' bg='green.100'>
                                                                                <TagLabel>
                                                                                    {type}
                                                                                </TagLabel>
                                                                            </Tag>
                                                                        )
                                                                    })}
                                                                </VStack>
                                                            </Td>
                                                            <Td>&#x20B9; {bond.face_value}</Td>
                                                            <Td>
                                                                {bond.status ?
                                                                    <Tag size='sm' bg='green.100'>
                                                                        <TagLabel>
                                                                            <CheckIcon />
                                                                        </TagLabel>
                                                                    </Tag> :
                                                                    <Tag size='sm' bg='red.200'>
                                                                        <TagLabel>
                                                                            {bond.issue}
                                                                        </TagLabel>
                                                                    </Tag>}

                                                            </Td>

                                                            <Td>
                                                                <AccordionButton w='50px'>
                                                                    <AccordionIcon />
                                                                </AccordionButton>
                                                            </Td>
                                                        </Tr>
                                                        {isExpanded ?
                                                            (<Tr>
                                                                <Td colSpan={"9"}>
                                                                    <Table variant='simple' width='40%' align="center">
                                                                        <TableCaption padding='0' placement="top">Recent Trades for {bond.id}</TableCaption>
                                                                        <Thead>
                                                                            <Tr>
                                                                                <Th>Counterparty</Th>
                                                                                <Th>Price</Th>
                                                                                <Th>Issue</Th>
                                                                            </Tr>
                                                                        </Thead>
                                                                        <Tbody>
                                                                            {bond.trades.map((trade) => {
                                                                                return (
                                                                                    <Tr>
                                                                                        <Td>{trade.counterparty}</Td>
                                                                                        <Td>&#x20B9; {trade.price}</Td>
                                                                                        <Td>
                                                                                            {trade.status ?
                                                                                                <Tag size='sm' bg='green.100'>
                                                                                                    <TagLabel>
                                                                                                        <CheckIcon />
                                                                                                    </TagLabel>
                                                                                                </Tag> :
                                                                                                <Tag size='sm' bg='red.200'>
                                                                                                    <TagLabel>
                                                                                                        {trade.issue}
                                                                                                    </TagLabel>
                                                                                                </Tag>}
                                                                                        </Td>
                                                                                    </Tr>
                                                                                )
                                                                            })}
                                                                        </Tbody>
                                                                    </Table>
                                                                </Td>
                                                            </Tr>) : <></>
                                                        }
                                                    </>
                                                )
                                            }
                                        }
                                    </AccordionItem>
                                )

                            })}
                        </Tbody>
                    </Table>
                </Accordion>
            </CardBody>
        </Card >
    )
}

export default TableCard;