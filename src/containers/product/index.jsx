import React from "react";
import { Wrapper, Flex, Title, Text, Hr, Button } from "components/ui";
import Carousel from 'components/carousel/Carousel';
import ColorPicker from "components/ColorPicker";
import SizePicker from 'components/SizePicker';
import CountPicker from 'components/CountPicker';

import image1 from 'assets/image-1.png';
import image2 from 'assets/image-2.png';
import image3 from 'assets/image-3.png';
import image4 from 'assets/image-4.png';
import image5 from 'assets/image-5.png';
import image6 from 'assets/image-6.png';
import image7 from 'assets/image-7.png';
import image8 from 'assets/image-8.png';

const colors = [
    {
        id:1,
        color: "#E6110C",
    },
    {
        id:2,
        color: "linear-gradient(180deg, #8B2936 1.47%, #000000 100%)"
    },
    {
        id:3,
        color:"#282828",
    },
];

const sizes = [
    {
        id:1,
        label: "XS (27.5” wheels)" ,
    },
    {
        id: 2, 
        label: "S (27.5” wheels)",
    }
];


const images = [image1, image2, image3, image4, image5, image6, image7, image8 ];



function Product(){

return(
    <section>
        <Wrapper>
            <Title withBorder margin='70px 0 30px' >
                     Meet the new king of the peaks
            </Title>
                <Text margin='0 0 60px'>
                    The Fuel EX 9.8 will take your ride to the next level with a parts package that delivers top performance. 
                    We have also expanded our size range to ensure the comfort of all riders. You can choose the maximum wheel 
                    size that will fit your frame: XS frames are available with 27.5" wheels, S frames can choose between 27.5" or 29",
                    and sizes M to XL are available with 29" wheels. The Fuel EX 9.8 is a great investment for one bike that can do it all.
                </Text>
                        <Flex gap='30px'>
                <Flex flex={1}>
                    <Carousel>
                        {images.map((image) => (<img src={image} key={image} alt={image} /> ))}

                    </Carousel>
                    </Flex>
                    <Flex
                        width='470px'
                        direction='column'
                        align='flex-start'
                        justify='space-between'
                        >
                        <Title withBorder> Fuel EX 9.8 </Title>
                        <Flex justify='space-between' width='100%' margin='30px 0 20px'>
                            <Text weight={500}>2022</Text>
                            <Text weight={500} color='#B5B5B5'>
                                Model 33408
                            </Text>
                        </Flex>
                        <Text color="#020106" weight={700} size='26px'>
                            $5.499.99 - $5.999.99
                        </Text>
                        <Hr />
                        <Text margin='5px 0'>
                        The Fuel EX 9.8 combines a lightweight full carbon frame with parts selected for the best value for money.
                        High-quality FOX suspension with upgraded front and rear shocks, carbon wheels with Rapid Drive rear hub,
                        and ultra-smooth Shimano XT wide-range drivetrain give this model an added edge that you'll notice from the
                        first pedal stroke.
                        </Text>
                        <Hr />
                        <Flex width='100%' align='flex-start'>
                         <Flex flex={1} justify='flex-start'>
                            <ColorPicker items={colors} />
                            </Flex>   
                            <Flex flex={1}>
                            <SizePicker items={sizes} />
                                </Flex>
                        </Flex>
                        <CountPicker />
                        <Button>make order</Button>
                    </Flex>
            </Flex>
        </ Wrapper>
    </section>
);

}

export default Product;