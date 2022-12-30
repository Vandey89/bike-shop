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

    const [deliveryNumber, setDeliveryNumber] = useState({
        value:"",
        error:false,
    });
    const onChangeFormData = (key) => (e) => {
        setFormData((prev) => ({...prev, [key] : {...prev[key], value: e.target.value}}))
    };
    const onChangeDelivery = (e) => {
        setDeliveryNumber((prev) => ({...prev, value: e.target.value}))
    };
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
                    <Title margin="30px 0 100px">FUEL EX 9.8</Title>
                    <form>
                     <TextField
                      placeholder="Full name:"
                      errorLabel="
                      Please enter your full name"
                      error={formData["name"].error}
                      value={formData["name"].value}
                      onChange={onChangeFormData("name")}
                     /> 
                     <TextField
                      placeholder="E-mail:"
                      errorLabel="
                      Please enter your E-mail"
                      error={formData["email"].error}
                      value={formData["email"].value}
                      onChange={onChangeFormData("email")}
                     />  
                     <TextField
                      placeholder="phone number:"
                      errorLabel="
                      Please enter your phone"
                      error={formData["phone"].error}
                      value={formData["phone"].value}
                      onChange={onChangeFormData("phone")}
                     />  
                     <TextField
                      disabled
                      placeholder="Delivery date:"
                      errorLabel="Delivery date"
                      error={formData["date"].error}
                      value={formData["date"].value}
                      onChange={onChangeFormData("date")}
                     />  

                     <Button type="submit"> Make order </Button>
                    </form>
                    

                </Flex>
            )}

        {selectedTab === 1 && (
            <Flex padding="60px 80px" direction="column"> 
                    {/* <img src={Checkout} alt="" /> */}
                    <Text margin="30px 0 100px">Enter your order number to check its status</Text>  
                    <form action="">
                    <TextField
                      placeholder="Order number:"
                      errorLabel="Please enter Order code"
                      error={formData["phone"].error}
                      value={formData["phone"].value}
                      onChange={onChangeDelivery}
                     />  
                     <Button type="submit"> get information an order </Button>
                    </form>
            </Flex>
            )}
        
    </BorderContainer>
);
}

export default Form;