import React from "react";
import { Wrapper, Flex, Button } from "components/ui";
import { HeaderSC, Absolute, HeaderText } from "./styled";
import { ReactComponent as Logo } from "assets/logo.svg";
import { Vremya } from "./styled";
import Moment from "react-moment";

function Header({handleProductScroll}){
return(
    
    <HeaderSC>
        
                   <Wrapper reLative height="100%">
            <Flex padding="24px 0 0">
                <a href="https://ru.wikipedia.org/wiki/Trek_Bicycle_Corporation" rel='noreferrer' target='_blank'><Logo /></a>
                <Vremya>
               <Moment  src="https://MomentJS.com/downloads/moment-with-locales.js" interval={1000}  />
               </Vremya> 
               </Flex>
               <Absolute>
                <HeaderText red weight={700}> new </HeaderText>
                <HeaderText> ideal </HeaderText>
                <HeaderText size='71px' weight={900} space='30px'>Fuel EX 9.8 GX</HeaderText>
                <Button onClick={handleProductScroll}>make order</Button>
             </Absolute>
        </Wrapper>
    </HeaderSC>
)

}

export default Header;