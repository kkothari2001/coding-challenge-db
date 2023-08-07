
import data from "../../data"
import { Avatar, Box, Heading } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons"

const MainContainer = () => {
    return (
        <Box border='1px solid' margin='1rem' w='50%' borderRadius='10px' padding='1rem'>
            <Box fontSize='1.4rem' fontWeight='bold' pb={'1rem'}>Matured Bonds</Box>
            <Accordion allowMultiple allowToggle>
                {[1, 2].map((value) => {
                    return (
                        <Bond />
                    )
                })}
            </Accordion>
        </Box>
    )
}

const Bond = () => {
    return (
        <AccordionItem>
            <AccordionButton>
                <Box width='100%'>
                    <StarIcon />
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis porro maiores praesentium vel atque, unde officia quas iste sunt nostrum magni nisi iure nihil beatae rem similique sed. Delectus.
            </AccordionPanel>
        </AccordionItem>
    )
}

export default MainContainer;