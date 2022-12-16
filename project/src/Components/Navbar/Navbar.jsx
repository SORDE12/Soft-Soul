import './Navbar.css'
import React from 'react'
import { Box, Text, Flex, Image, Input, Spacer, InputGroup,Grid,GridItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import img from "../images/softSoul.png"
import { ChevronDownIcon } from "@chakra-ui/icons"

export const Navbar = () => {
    return (
        <div>
            <Box bg='whiteSmoke' w='100%' color='#21201E' >
                <Flex gap={2}>
                    <Image borderRadius='full' p={2} boxSize='10%' src={img} alt='logo' />
                    <div class="dropdown">
                        <p class="dropbtn">Software{<ChevronDownIcon />}</p>
                        <div class="dropdown-content" >
                            <h3 style={{ marginTop: "50px" , color:"#2E2E33"}}>The HubSpot CRM Platform</h3>
                            <p style={{ marginTop: "10px" , color:"gray"}}>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
                            <Grid style={{marginBottom:"15px",marginTop:"15px"}} templateColumns='repeat(2, 1fr)' gap={4}>
                                {/* <GridItem colSpan={2} h='10'gap bg='tomato' /> */}
                                
                                <GridItem><Button color="blue" backgroundColor="white">Free HubSpot CRM</Button></GridItem>
                                <GridItem ><Button color="blue" backgroundColor="white">Overview of all products</Button></GridItem>
                            </Grid>
                            <Grid marginTop="15px" templateColumns='repeat(3, 1fr)' gap={4}>
                                {/* <GridItem colSpan={2} h='10'gap bg='tomato' /> */}
                                <GridItem>1</GridItem>
                                <GridItem>1</GridItem>
                                <GridItem>1</GridItem>
                                <GridItem>1</GridItem>
                                <GridItem>1</GridItem>
                            </Grid>
                        </div>
                    </div>
                    <Link to="/pricing" style={{ color: "black", fontSize: "20px", margin: "auto", textUnderlineOffset: "5px" }}><p>Pricing</p></Link>
                    <div class="dropdown">
                        <p class="dropbtn">Resources{<ChevronDownIcon />}</p>
                        <div class="dropdown-content" >
                            <h3 style={{ marginTop: "50px" }} >The HubSpot CRM Platform</h3>
                            <p>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <Spacer />

                    <div class="dropdown1">
                        <p class="dropbtn1" style={{ paddingRight: "50px" }}>About{<ChevronDownIcon />}</p>
                        <div class="dropdown-content1" >
                            <h3 style={{ marginTop: "50px" }}>The HubSpot CRM Platform</h3>
                            <p>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div style={{ display: Flex, justifyContent: "center", alignItems: "center", margin: "auto" }}>
                        <Link to="/login" style={{ color: "black", fontSize: "20px", margin: "auto", textUnderlineOffset: "5px" }}><p style={{ paddingRight: "50px" }}>Customer Support</p></Link>
                    </div>

                    <div style={{ display: Flex, justifyContent: "center", alignItems: "center", margin: "auto" }}>
                        <Link to="/login" style={{ color: "black", fontSize: "20px", margin: "auto", textUnderlineOffset: "5px" }}><p style={{ paddingRight: "50px" }}>Login</p></Link>

                    </div>

                </Flex>


            </Box>
        </div >
    )
}
