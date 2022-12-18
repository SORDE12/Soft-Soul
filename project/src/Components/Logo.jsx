

import g from "./Logo.module.css"


export default function Logo(){

    return(
        <>
        <div className={g.container}>
            <div className={g.box}>

                <div className={g.box1}>
                    <h2 style={{fontSize:"36px",fontWeight:"bolder",marginTop:"50px"}}>158,000+</h2>
                    <p style={{fontSize:"18px",fontWeight:"lighter"}}>customers in over 120 countries growing their businesses with Soft Soul</p>


                </div>
                <div className={g.box2}>
                    <div className={g.logo}>
                        <img src="https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png" alt="" />
                    </div>
                    <div className={g.logo}>
                        <img src="https://f.hubspotusercontent00.net/hubfs/53/trello-logo-blue%20(1).png" alt="" />
                    </div>
                    <div className={g.logo}>
                        <img src="https://www.hubspot.com/hubfs/Reddit%20Logo%20for%20HS%20website%20(1).png" alt="" />
                    </div><div className={g.logo}>
                        <img src="https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png" alt="" />
                    </div><div className={g.logo}>
                        <img src="https://f.hubspotusercontent00.net/hubfs/53/soundcloud.png" alt="" />
                    </div><div className={g.logo}>
                        <img src="https://www.hubspot.com/hubfs/Momentive%20Logo%20for%20HS%20website.png" alt="" />
                    </div><div className={g.logo}>
                        <img src="https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png" alt="" />
                    </div><div className={g.logo}>
                        <img src="https://www.hubspot.com/hubfs/Eventbrite%20Logo%20for%20HS%20Website-1.png" alt="" />
                    </div>
                    


                </div>

            </div>

        </div>
        
        </>
    )
}