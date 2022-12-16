
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../images/softSoul.png"
import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons"
import b from "./BottomNav.module.css"
import { useEffect, useState } from 'react'
import Navbar1 from '../Navbar1/Navbar1'





export default function NavbarAll() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return <div className={`navbar ${stickyClass}`}><BottomNav/></div>;
}



const data2={
    url:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/1-icon.svg",
    heading:"Service",
    p:[
       
        "Onboarding and Consulting Services",
        
        "Hire a Service Provider"
    ]
}

const data1={
    url:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/3-icon.svg",
    heading:"Education",
    p:[
       
        "Blog",
        
        "Ebooks ,Guides & More",
        
        "Free Courses & Certifications",
        
        "Inbound Methodology"
    ]
}

const data3={
    url:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WBZ-1165%20Global%20Nav%20Redesign/2-icon.svg",
    heading:"Why Soft Soul",
    p:[
       
        "Case Studies",
        
        "Whu Choosen Soft Soul",
       
    ]
}


const List=({data})=>{
    return(
    <div style={{marginBottom:"20px"}}>
        <div className={b.head}>
            <img src={data.url} alt="hello" />
            <p>{data.heading}</p>
        </div>
        {data.p.map((item)=>(<p  className={b.sub_head}> {item}</p>))}

    </div>


    )
}

function BottomNav() {
    return (
        <>
            <div><Navbar1/></div>
            <div className={b.container}>
                <div className={b.sub_container}>
                    <div className={b.first_div}>
                        <Link to="/">    <img style={{borderRadius:"10px",height:"50px",width:"110px"}} src={img} alt="hello" />
                        </Link>
                    </div>
                    <div className={b.second_div}>
                        <div className={b.small_box}>
                            <div className={b.dropdown}>
                                <p>Software</p>
                                <ChevronDownIcon marginTop="5px" />
                                <div>
                                    <div className={b.dropdown_content3}>
                                        <h3>The HubSpot CRM Platform</h3>
                                        <p style={{fontSize:"14px",fontWeight:"lighter",marginTop:"15px"}}>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
                                        <div className={b.para_head}>
                                            <div className={b.para_below}><span>Free HubSpot CRM</span><ArrowForwardIcon/></div>
                                            <div className={b.para_below}><span>overview of all products</span><ArrowForwardIcon/></div>
                                        </div>
                                        <div className={b.box_list}>
                                            <div className={b.list_box}>
                                                <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                                <div className={b.max}>
                                                    <h4>Marketing Hub</h4>
                                                    <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                    <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                                </div>
                                            </div>
                                            <div className={b.list_box}>
                                                <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                                <div className={b.max}>
                                                    <h4>Sales Hub</h4>
                                                    <p style={{fontSize:"14px",fontWeight:"lighter"}}>sales  software.</p>
                                                    <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                                </div>
                                            </div>
                                            <div className={b.list_box}>
                                                <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                                <div className={b.max}>
                                                    <h4>Service Hub</h4>
                                                    <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                    <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                                </div>
                                            </div>
                                            <div className={b.list_box}>
                                                <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                                <div className={b.max}>
                                                    <h4>CMS Hub</h4>
                                                    <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                    <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                                </div>
                                            </div>
                                            <div className={b.list_box}>
                                                <div className={b.mini}><img src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" alt="" /></div>
                                                <div className={b.max}>
                                                    <h4>Operations Hub</h4>
                                                    <p style={{fontSize:"14px",fontWeight:"lighter"}}>Marketing automation software.</p>
                                                    <p style={{fontSize:"14px" ,fontWeight:"lighter"}}>Free and premium plans</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={b.bottom}>
                                            <h4>App Marketplace</h4>
                                            <p style={{fontSize:"14px",fontWeight:"lighter",marginTop:"15px"}}>connect your favorite apps to hubspot .see all integration at </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={b.dropdown}>
                                <p>Pricing</p>
                            </div>
                            <div className={b.dropdown}>
                                <p>Resourses</p>
                                <ChevronDownIcon marginTop="5px" />
                                <div style={{paddingBottom:"20px"}}>
                                    <div className={b.dropdown_content2}>
                                        <div className={b.haw}>
                                        <div><List data={data1}/></div>
                                        <div><List data={data2}/></div>
                                        <div><List data={data3}/></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className={b.btn}>Get a demo or Start free</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}