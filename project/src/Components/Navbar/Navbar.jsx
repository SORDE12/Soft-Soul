import './Navbar.css'
import React from 'react'
import { Box, Text, Flex, Image, Input, Spacer, InputGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import img from "../images/softSoul.png"

export const Navbar = () => {
    return (
        <div>
            <Box bg='gray' w='100%'  color='#21201E' PaddingRight={20} paddingLeft={20}>
                <Flex gap={2} paddingLeft={2} paddingRight={2} >
                    <Image borderRadius='full' p={2} boxSize='10%' src={img} alt='logo' />
                    <Text as='b' color="white" p={25} fontSize='30px'>Soft Soul</Text>
                    <div class="dropdown">
                        <p class="dropbtn">Software</p>
                        <div class="dropdown-content" >
                            <h3>The HubSpot CRM Platform</h3>
                            <p>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <Link to="/pricing" style={{ color: "white",fontSize: "20px",margin:"auto", textUnderlineOffset: "5px"}}><p>Pricing</p></Link>
                    <div class="dropdown">
                        <p class="dropbtn">Resources</p>
                        <div class="dropdown-content" >
                            <h3>The HubSpot CRM Platform</h3>
                            <p>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                   <Spacer/>
                    <div>
                    <Link to="/login" style={{ color: "white",fontSize: "20px",marginRight:"200px",textUnderlineOffset: "5px"}}><p>Login</p></Link>
                    </div>
                    <div>
                    <Link to="/login" style={{ color: "white",fontSize: "20px",marginRight:"200px",textUnderlineOffset: "5px"}}><p>Login</p></Link>
                    </div>
                    <div>
                    
                    </div>

                </Flex>


            </Box>
        </div >
    )
}
