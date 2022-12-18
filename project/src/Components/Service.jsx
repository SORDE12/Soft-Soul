

import { Button, ButtonGroup, Stack } from "@chakra-ui/react"
import e from "./Service.module.css"
import {
    List,
    ListItem,
    ListIcon,

} from '@chakra-ui/react'
import { Link } from "react-router-dom"




// The default icon size is 1em (16px)
function Box() {
    return (
        <div className={e.box}>
            <div className={e.tophead}>
                <span><img height="30px" width="30px" src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="hao" /></span><span style={{ fontSize: "24px", marginLeft: "20px" }}>Marketing Hub</span><span style={{ fontSize: "14px" }}>TM</span>

            </div>
            <div>
                <p className={e.para2} >Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</p>
            </div>
            <hr style={{ marginTop: "50px" }} />
            <p style={{ fontSize: "16px", margin: "16px" }}>Popular features</p>
            <div>
                <List spacing={3}>
                    <ListItem marginTop="30px">
                        <ListIcon fontSize="25px" color='orange.500' />
                        Drag-and-drop editor
                    </ListItem>
                    <ListItem>
                        <ListIcon fontSize="25px" color='red.500' />
                        SEO recommendations
                    </ListItem>
                    <ListItem>
                        <ListIcon fontSize="25px" color='red.500' />
                        Website themes
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}

                </List>
            </div>
            <div>
                <Stack marginTop="20px" direction='row' spacing={4} align='center'>
                    <Button width="276px" height="44px" colorScheme='red' variant='solid'>
                        Get Started
                    </Button>

                </Stack>
            </div>
        </div>
    )
}


export default function Service() {

    return (
        <>
            <div className={e.container}>
                <h2 className={e.tophead1}>The CRM Platform Your Whole Business Will Love</h2>
                <p className={e.para1}>HubSpot’s CRM platform has all the tools and integrations you need for marketing, sales, content management, and customer service. Each product in the platform is powerful alone, but the real magic happens when you use them together.</p>
                <ButtonGroup marginTop="50px" spacing='5'>
                    <Link to="/demo">
                    <Button variant='solid' width="200px" colorScheme='red'>Get a free CRM</Button>
                    </Link>
                    
                    <Button colorScheme="red" width="200px" bg="fa5933" variant='outline'>Demo premium CRM</Button>
                </ButtonGroup>

                <div className={e.list_box}>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />





                </div>



            </div>
        </>
    )
}