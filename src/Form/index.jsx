import React, { useContext, useState } from "react";
import { Flex, Button, Title, Text } from "components/ui";
import TextField from "TextField";
import Context from "containers/context/context";
import { BorderContainer } from "./styled";
import Checkout from "assets/checkout.png";

const Tabs = ['Check order', 'Check order status']

function Form() {
    const { size, color, count } = useContext(Context);
    const [selectedTab, setSelectedTab] = useState(0);
    const [formData, setFormData] = useState({
        name: {
            value: "",
            error: false,
        },
        email: {
            value: "",
            error: false,
        },
        phone: {
            value: "",
            error: false,
        },
        date: {
            value: new Date().toISOString().replace(/T.+/g, ''),
            error: false,
        },
    });
return (
    <BorderContainer >
        <Flex>
            {Tabs.map((tab, index) => (
                <Flex flex={1} key={tab}>
                    <Button
                    width="100%"
                    color={selectedTab === index ? "#282828" : "#FFF"}
                    backgroung={selectedTab === index ? "#FFF" : "#020106"}
                    onClick={() => setSelectedTab(index)}
                    >
                        {tab}
                    </Button>
                </Flex>
            ))}
        </Flex>
        {selectedTab === 0 && (
                <Flex padding="60px 80px" direction="column"> 
                    <img src={Checkout} alt="" />
                    <Title>FUEL EX 9.8</Title>
                    <form>
                        
                    </form>
                    

                </Flex>
            )}

        {selectedTab === 1 && (
                <Flex> Tab 2</Flex>
            )}
        
    </BorderContainer>
);
}

export default Form;