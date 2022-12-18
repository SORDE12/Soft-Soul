
import d from "./UpperDiv.module.css"

import React from 'react'

const UpperDiv = () => {
    return (
        <div>
            <div className={d.container}>

                <div className={d.small_container1}>
                    <p className={d.para1} >Soft Soul CRM PLATFORM</p>
                    <h1 className={d.head} >Powerful,
                        not overpowering</h1>
                    <p className={d.para2} >Finally, a CRM platform that’s both powerful and easy to use. Create delightful customer experiences. Have a delightful time doing it.</p>
                    <button className={d.btn} >start free or get a demo</button>
                    <p className={d.para3} >Get started with free tools, or get more with our premium software.</p>

                </div>
                <div className={d.small_container2}>
                    <img className={d.image} src="https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop@2x.png" alt="hello" />
                </div>

            </div>
        </div>
    )
}

export default UpperDiv