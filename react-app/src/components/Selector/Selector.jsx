import { Flex, Center, IconButton, Switch, useToast, useRadioGroup, useRadio } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import axios from "axios";

const Selector = (props) => {

    const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
    const [selectedDateStrings, setSelectedDateStrings] = useState(['2023-07-20', '2023-08-30']);
    const [formData, setFormData] = useState({});



    const formatDate = (date) => {
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset * 60 * 1000))
        return date.toISOString().split('T')[0]
    }

    const options = [
        { value: 'all', optionText: "All" },
        { value: 'call', optionText: "Callable Bonds" },
        { value: 'mrg', optionText: "Mortgage Bonds" },
        { value: 'trad', optionText: "Traditional Bonds" },
        { value: 'fxd', optionText: "Fixed Rate Bonds" },
    ]

    const updateDates = (newState) => {
        setSelectedDates(newState)
        if (newState.length === 2) {
            toast({
                title: `Bonds between ${formatDate(newState[0])} and ${formatDate(newState[1])} selected`
            })

            setSelectedDateStrings([formatDate(newState[0]), formatDate(newState[1])])
            console.log(selectedDateStrings)
        }
    }
    const toast = useToast()
    const [switchState, setSwitchState] = useState(0)


    const updateSwitches = (num) => {

        setSwitchState(num)
        console.log(num)
        toast({
            title: `${options[num].optionText} selected`
        })


    }

    useEffect(() => {
        const securityData = {
            startDate: selectedDateStrings[0],
            endDate: selectedDateStrings[1],
            bondtype: switchState.toString()
        }
        setFormData(securityData);
        axios.post("https://db-hackathon.onrender.com/api/getsecuritiesbyfilter", securityData)
            .then((response) => {
                console.log("response  ", response, securityData);
                props.setData(response.data)

            })
            .catch((error) => {
                console.log(error);
            })
    }, [switchState, selectedDateStrings])

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
                <FormControl>
                    <FormLabel htmlFor="datepicker">Date Range:</FormLabel>
                    <RangeDatepicker
                        id="datapicker"
                        selectedDates={selectedDates}
                        onDateChange={updateDates}
                    />
                </FormControl>
            </Flex>
        </Center>
    )
}

const RadioSwitch = (props) => {
    const switchHandler = (event) => {
        if (event.target.checked) {
            props.selectHandler(props.switchIndex)
        } else {
            if (props.switchIndex === 4) {
                props.selectHandler(0)
            } else {
                props.selectHandler(props.switchIndex + 1)
            }
        }
    }
    return (
        <FormControl display='flex'>
            <FormLabel flexGrow='1' htmlFor='test'>{props.optionText}</FormLabel>
            <Switch id='test' isChecked={props.switchState === props.switchIndex} onChange={switchHandler} />
        </FormControl>
    )
}
export default Selector;