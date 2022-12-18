
import { Box } from "@chakra-ui/react"
import f from "./Data.module.css"




export default function Data() {
    return (
        <>
            <div className={f.container}>
                <Box w='100%' h='948px' bgGradient='linear(to-r,teal.400, green.500,green.600 )'  >

                    <div>
                        <div className={f.sec} >
                            <h2 className={f.top_sec}>
                                Learn and grow with award-winning support and a thriving community behind you.
                            </h2>
                            <p className={f.para1}>You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</p>
                            <div className={f.box_list}>

                                <div className={f.box1}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg" alt="hao" />
                                        <div className={f.hao}>
                                            <div style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>150</div ><div className={f.mini} style={{ fontSize: "15px" }}>+</div>
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>Soft Soul user groups</p>

                                    </div>

                                </div>
                                <div className={f.box2}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg" alt="hao" />
                                        <div className={f.hao}>
                                            <div style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>7M</div ><div className={f.mini} style={{ fontSize: "15px" }}>+</div>
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>monthly visits</p>

                                    </div>
                                   {/* line */}

                                </div>
                                <div className={f.box3}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg" alt="hao" />
                                        <div className={f.hao}>
                                            <div className={f.no} style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>463K</div ><div className={f.mini} style={{ fontSize: "15px" }}>+</div>
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>certified professionals</p>

                                    </div>

                                </div>
                                <div className={f.box4}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg" alt="hao" />
                                        <div className={f.hao}>
                                            <div style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>70K</div >
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>registered attendees</p>

                                    </div>

                                </div>
                                <div className={f.box5}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://cdn2.hubspot.net/hubfs/53/HubSpot-App-Marketplace-White.png" alt="hao" />
                                        <div className={f.hao}>
                                            <div style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>1,250</div ><div className={f.mini} style={{ fontSize: "15px" }}>+</div>
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>integrations</p>

                                    </div>

                                </div>
                                <div className={f.box6}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg" alt="hao" />
                                        <div className={f.hao}>
                                            <div style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>6</div >
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>languages</p>

                                    </div>

                                </div>
                                <div className={f.box7}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg" alt="hao" />
                                        <div className={f.hao}>
                                            <div style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>3.1M</div ><div className={f.mini} style={{ fontSize: "15px" }}>+</div>
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>social followers</p>

                                    </div>

                                </div>
                                <div className={f.box8}>
                                    <div className={f.cute}>
                                        <img style={{ margin: "auto" }} src="https://cdn2.hubspot.net/hubfs/53/Lists.svg" alt="hao" />
                                        <div className={f.hao}>
                                            <div style={{ fontSize: "36px", fontWeight: "bolder", marginTop: "20px" }}>158,000</div ><div className={f.mini} style={{ fontSize: "15px" }}>+</div>
                                        </div>
                                        <p style={{ fontWeight: "bold" }}>customers</p>

                                    </div>

                                </div>

                            </div>
                            <hr className={f.line} />
                        </div>



                    </div>
                </Box>

            </div>



        </>


    )
}