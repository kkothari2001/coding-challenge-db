import { Flex, Center, IconButton, Switch, useToast, useRadioGroup, useRadio } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";


const Selector = () => {

    const options = [
        { value: 'all', optionText: "All" },
        { value: 'trad', optionText: "Traditional Bonds" },
        { value: 'call', optionText: "Callable Bonds" },
        { value: 'fxd', optionText: "Fixed Rate Bonds" },
        { value: 'mrg', optionText: "Mortgage Bonds" }
    ]

    const toast = useToast()
    const [switchState, setSwitchState] = useState([true, false, false, false, false])

    const updateSwitches = (num) => {
        let newState = [false, false, false, false, false];
        newState[num] = true
        setSwitchState(newState)
        toast({
            title: `${options[num].optionText} selected`
        })
    }



    return (
        <Center>
            <Flex margin='2em' flexDirection='column' minW='200px' alignItems='center' >
                {
                    options.map((option, index) => {
                        return (
                            <RadioSwitch optionText={option.optionText} switchState={switchState} selectHandler={updateSwitches} switchIndex={index} />
                        )
                    })
                }
            </Flex>
        </Center>
    )
}

const RadioSwitch = (props) => {
    const switchHandler = (event) => {
        if (event.target.checked) {
            props.selectHandler(props.switchIndex)
        } else {
            if (props.switchIndex == 4) {
                props.selectHandler(0)
            } else {
                props.selectHandler(props.switchIndex + 1)
            }
        }
    }
    return (
        <FormControl display='flex'>
            <FormLabel flexGrow='1' htmlFor='test'>{props.optionText}</FormLabel>
            <Switch id='test' isChecked={props.switchState[props.switchIndex]} onChange={switchHandler} />
        </FormControl>
    )
}
export default Selector;