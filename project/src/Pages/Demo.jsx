import React from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { ChevronLeftIcon, Search2Icon, ChevronRightIcon } from '@chakra-ui/icons'
import { Input, Button, Grid, GridItem } from '@chakra-ui/react'
import k from "./Demo.Module.css"


const Demo = () => {
    return (
        <div style={{ width: "85%", margin: "auto" }}>
            <div style={{ display: "flex", flexDierection: "row" }}>
                <h1 style={{ fontSize: "30px" }}>Soft Soul</h1>
            </div>

            <div>
                <Link to="/" style={{ display: "flex", flexDierection: "row" }}><ChevronLeftIcon color='teal' boxSize={6} /><p style={{ color: "teal" }}>Back</p></Link>
            </div>

            <div style={{ display: "flex", flexDirection: "row", margin: "auto", width: "80%", height: "400px", display: "flex", justifyContent: "center", alignIten: "center", marginTop: "100px" , }}>

                <div style={{ margin: "left", textAlign: "left" }}>
                    <h1 style={{ fontSize: "22px", color: "gray" }}>Nice to meet you !</h1>
                    <h1 style={{ fontSize: "30px", color: "black" }}>What industry are you in?</h1>
                    <Input marginRight="10px" placeholder='Search Industries' width="500px" border="0px" bottomBorder="1px solid black" />
                    <Search2Icon color='teal' />
                    <br />
                    <Button marginTop="20px" disabled="true" width="500px" backgroundColor="gray">
                        Next <ChevronRightIcon />
                    </Button>
                </div>

                <div className={k.small_container} >

                    <Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(3, 1fr)' gap={5}>

                        <GridItem><img style={{width:"130px" ,marginLeft:"50px", height:"30px"}} src="https://static.hsappstatic.net/signup-ui-lego/static-1.7492/images/logos/classpass-logo.png" /></GridItem>

                        <GridItem><img style={{width:"130px" ,marginLeft:"50px", height:"30px"}} src="https://static.hsappstatic.net/signup-ui-lego/static-1.7492/images/logos/soundcloud.png" /></GridItem>

                        <GridItem><img style={{width:"80px" ,marginLeft:"50px",  height:"30px"}}  src="https://static.hsappstatic.net/signup-ui-lego/static-1.7492/images/logos/g2-crowd-logo.png" /></GridItem>

                        <GridItem><img style={{width:"130px" ,marginLeft:"50px",  height:"30px"}} src="https://static.hsappstatic.net/signup-ui-lego/static-1.7492/images/logos/trello.png" /></GridItem>

                        <GridItem><img style={{width:"130px" ,marginLeft:"50px",  height:"30px"}} src="https://static.hsappstatic.net/signup-ui-lego/static-1.7492/images/logos/vmware-png-logo.png" /></GridItem>

                        <GridItem><img style={{width:"130px" ,marginLeft:"50px",  height:"50px"}} src="https://static.hsappstatic.net/signup-ui-lego/static-1.7492/images/logos/long-surveymonkey.png" /></GridItem>

                    </Grid>
                    <div style={{ display:"flex", flexDirection:"row" ,marginLeft:"50px", marginTop:"50px"}}>
                        <h1 style={{color:"grey",fontSize:"30px",marginRight:"10px"}} >135,000</h1>
                        <h1 style={{color:"grey",marginRight:"10px",marginTop:"18px"}}>customers in over</h1>
                        <h1 style={{color:"grey",fontSize:"30px",marginRight:"10px"}}>120</h1>
                        <h1 style={{color:"grey",marginRight:"10px",marginTop:"18px"}}>countries are</h1>
                    </div>
                    <div >
                        <h1 style={{color:"grey",marginRight:"10px",marginTop:"18px"}}>growing with Soft Soul</h1>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default Demo