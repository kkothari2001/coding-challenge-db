import { Card, CardHeader, CardBody, Text, Flex, Box, VStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react"
import { Table, TableCaption, Thead, Tbody, Tr, Td, Th } from "@chakra-ui/react"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { Fragment } from "react"

const TableCard = (props) => {
    return (
        <Card height={props.height} padding='0.5em'>
            <CardHeader display='flex' alignItems='center'>
                <Text display='inline' fontSize='1.6em'>{props.title}</Text> {props.icon}
            </CardHeader>
            <CardBody overflow='scroll'>
                <Accordion allowMultiple={true} allowToggle>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                {props.external_headers.map((header) => {
                                    return (<Td key={`${props.title}-${header}`}>{header}</Td>)
                                })}
                                <Td></Td>
                            </Tr>

                        </Thead>
                        <Tbody>
                            {props.data.map((bond) => {
                                return (
                                    <SingleBond key={bond.id} bond={bond} internal_headers={props.internal_headers} />
                                )
                            })}
                        </Tbody>
                    </Table>
                </Accordion>
            </CardBody>
        </Card >
    )
}


const SingleBond = (props) => {
    return (
        <AccordionItem as={Fragment}>
            {
                ({ isExpanded }) => {
                    return (
                        <>
                            <Tr key={`data-${props.bond.security_id}`}>
                                <Td>{props.bond.isin}</Td>
                                <Td>{props.bond.cusip}</Td>
                                <Td>
                                    <Flex flexDirection='column'>
                                        <Text fontWeight='bold'>
                                            {props.bond.issuer.name}
                                        </Text>
                                        <Text fontWeight='light'>
                                            {props.bond.issuer.industry}
                                        </Text>
                                    </Flex>
                                </Td>
                                <Td>{props.bond.maturity_date}</Td>
                                <Td>
                                    <Text display='inline'>{props.bond.coupon.rate}
                                    </Text>
                                    <Text display='inline'>
                                        {" "}%{props.bond.coupon.unit}
                                    </Text>
                                </Td>
                                <Td>
                                    <VStack>
                                        {props.bond.type.map((type) => {
                                            return (
                                                <Tooltip label={type} fontSize='small'>
                                                    <Tag size='sm' bg='green.100'>
                                                        <TagLabel>
                                                            {type}
                                                        </TagLabel>
                                                    </Tag>
                                                </Tooltip>
                                            )
                                        })}
                                    </VStack>
                                </Td>
                                <Td>{props.bond.facevalue.unit} {props.bond.facevalue.value}</Td>

                                <Td>
                                    <AccordionButton>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Td>
                            </Tr>
                            {isExpanded ?
                                (<Tr>
                                    <Td colSpan={"8"}>
                                        <Table>
                                            <TableCaption placement="top">Recent Trades for {props.bond.isin}</TableCaption>
                                            <Thead>
                                                <Tr>
                                                    {
                                                        props.internal_headers.map((header) => {
                                                            return (<Th>{header}</Th>)
                                                        })
                                                    }
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {props.bond.trades.map((trade) => {

                                                    return (
                                                        <Tr key={trade.id}>
                                                            <Td>{trade.counter_party_name}</Td>
                                                            <Td>{trade.price.unit} {trade.price.value}</Td>
                                                            <Td>{trade.date}</Td>
                                                            <Td>
                                                                {trade.status === "Ok" ?
                                                                    <Tag size='sm' bg='green.100'>
                                                                        <TagLabel>
                                                                            <CheckIcon />
                                                                        </TagLabel>
                                                                    </Tag> :
                                                                    <Tag size='sm' bg='red.200'>
                                                                        <TagLabel>
                                                                            {trade.status}
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
}

export default TableCard;