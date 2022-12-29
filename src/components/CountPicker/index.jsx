import React, {useContext} from "react";
import { Flex, Text } from "components/ui";
import Context from "containers/context/context"
import { Button, Input } from './styled';

function CountPicker() {
    const { count, setCount } = useContext(Context);
    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDicrement = () => {
        if(count > 0) setCount((prev) => prev - 1)
    }
    const handleChange = (e) => {
        if(e.target.value.length){
            setCount(parseInt(e.target.value, 10))
        }else{
            setCount(1);
        }
    }
    return(
        <Flex justify='flex-start' margin='20px 0 30px'>
            <Text weight={500} margin='0 30px 0 0'>Amount</Text>
            
        <Flex>
        <Button onClick={handleDicrement}>-</Button>
        <Input value={count} onChange={handleChange}/>
        <Button onClick={handleIncrement}>+</Button>
        </ Flex>
       </Flex>
    )
}

export default CountPicker