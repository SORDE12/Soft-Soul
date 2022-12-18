import k from "./Footer.module.css"
import img from "./images/softSoul.png"



export default function Footer() {
    return (
        <>
            <div className={k.container}>
                <div className={k.box}>
                    <div className={k.box1}>
                        <div className={k.box11}>
                        <h2 className={k.head}>Popular Features</h2>
                            <li className={k.li}>Free Meeting Scheduler App</li>
                            <li className={k.li}>Social Media Tools</li>
                            <li className={k.li}>Email Tracking Software</li>
                            <li className={k.li}>Sales Email Automation</li>
                            <li className={k.li}>Ads Software</li>
                            <li className={k.li}>Email Marketing Software</li>
                            <li className={k.li}>Lead Management Software</li>
                            <li className={k.li}>Pipeline Management Tools</li>
                            <li className={k.li}>Free Website Builder</li></div>
                     <div className={k.box11}>
                     <li className={k.li}>Sales Email Templates</li>
                            <li className={k.li}>Help Desk Software</li>
                            <li className={k.li}>Free Online Form Builder</li>
                            <li className={k.li}>Free Chatbot Builder</li>
                            <li className={k.li}>Free Live Chat Software</li>
                            <li className={k.li}>Marketing Analytics</li>
                            <li className={k.li}>Free Landing Page Builder</li>
                            <li className={k.li}>Free Web Hosting</li>
                     </div>
                        </div>

                    <div className={k.box2}>
                        <div className={k.box22}>
                        <h2 className={k.head}>Free Tools</h2>
                        <li className={k.li}>Website Grader</li>
                            <li className={k.li}>Email Tracking Software</li>
                            <li className={k.li}>Sales Email Automation</li>

                            <li className={k.li}>Free Meeting Scheduler App</li>
                            <li className={k.li}>Social Media Tools</li>
                            
                            <li className={k.li}>Sales Email Automation</li>
                            <li className={k.li}>Ads Software</li>
                            <li className={k.li}>Email Marketing Software</li>
                            
                            <li className={k.li}>Free Website Builder</li>
                            <li className={k.li}>Email Tracking Software</li>
                            <li className={k.li}>Sales Email Automation</li>
                            <li className={k.li}>Website Thems And Templets</li>
                        </div>
                        <div className={k.box22}>
                        <h2 className={k.head}>Company</h2>
                        <li className={k.li}>About Us</li>
                            <li className={k.li}>Email Tracking Software</li>
                            <li className={k.li}>Sales Email Automation</li>

                            <li className={k.li}>Free Meeting Scheduler App</li>
                            <li className={k.li}>Social Media Tools</li>
                            
                            <li className={k.li}>Sales Email Automation</li>
                            <li className={k.li}>Contact Us</li>
                            

                        </div>
                        <div className={k.box22}>
                        <h2 className={k.head}>Customers</h2>
                        <li className={k.li}>Customers Support</li>
                            <li className={k.li}>Join a Local User Group</li>

                            <h2 style={{marginTop:"60px"}} className={k.head}>Partners</h2>
                        <li className={k.li}>All Partner Programs</li>
                            <li className={k.li}>Solutions Partner Program</li>
                            <li className={k.li}>App Partner Program</li>

                            <li className={k.li}>HubSpot for Startups</li>
                            <li className={k.li}>Affiliate Program</li>
                        </div>
                    </div>
                </div>
                <div className={k.bottom}>
                    <div className={k.line}><hr className={k.hr1} /></div>
                    <div className={k.line1}>
                        <div className={k.icon}>
                            <img className={k.img}  height="26px" width="26px" src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="" />
                        </div>
                        <div className={k.icon}>
                            <img className={k.img} height="26px" width="26px" src="https://cdn-icons-png.flaticon.com/128/739/739244.png" alt="" />
                        </div>
                        <div className={k.icon}>
                            <img className={k.img}  height="26px" width="26px" src="https://cdn-icons-png.flaticon.com/512/1077/1077046.png" alt="" />
                        </div>
                        <div className={k.icon}>
                            <img className={k.img}  height="26px" width="26px" src="https://cdn-icons-png.flaticon.com/128/220/220375.png" alt="" />
                        </div>
                        <div className={k.icon}>
                            <img className={k.img}  height="26px" width="26px" src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" alt="" />
                        </div>
                        <div className={k.icon}>
                            <img className={k.img}  height="26px" width="26px" src="https://cdn-icons-png.flaticon.com/128/717/717417.png" alt="" />
                        </div>
                        <div className={k.icon}>
                            <img className={k.img}  height="26px" width="26px" src="https://cdn-icons-png.flaticon.com/128/3046/3046120.png" alt="" />
                        </div>
                    </div>
                    <div className={k.line}><hr className={k.hr1} /></div>
                </div>
                <div className={k.below} >
                    <img style={{borderRadius:"10px",height:"50px",width:"110px", margin:"auto"}} src={img} alt="" />
                    <p>Copyright © 2022 Soft Soul, Inc.</p>
                </div>
            </div>
        </>
    )
}