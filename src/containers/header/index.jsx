import React from "react";
import { Wrapper, Flex, Button } from "components/ui";
import { HeaderSC } from "./styled";
import { ReactComponent as Logo } from "assets/logo.svg";

function Header(){
return(
    <HeaderSC>
        <Wrapper height="100%">
            <Flex padding="24px 0 0">
                <Logo />
            </Flex>
        </Wrapper>
    </HeaderSC>
)

}

export default Header;