

import h from "./Growing.module.css"

export default function Growing (){
    return(
        <>
        <div className={h.container}>
            <div className={h.main_box}>

                <div className={h.box}>
                    <h2 style={{fontSize:"32px",fontWeight:"bolder",marginBottom:"20px"}}>Start Growing With Soft Soul Today</h2>
                    <p style={{fontSize:"16px",fontWeight:"lighter",marginTop:"16px",marginBottom:"16px",width:"85%"}}>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
                    <button className={h.btn}>Start free Or get a demo</button>
                    <p style={{fontSize:"12px", fontWeight:"lighter"}}>Get started with free tools, or get more with our premium software.</p>

                </div>
                <div>

                    <img height="434px" width="350px" src="https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_3.png" alt="" />
                </div>
            </div>


        </div>
        
        </>
    )
}