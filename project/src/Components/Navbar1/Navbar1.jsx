import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from '@chakra-ui/layout'
import { ChevronDownIcon } from '@chakra-ui/icons'
import n from "./Navbar1.module.css"



const Navbar1 = () => {

    const [show, setShow] = useState(false)
    
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

  return (
    <div>
        <header className={`active ${show && 'hidden'}`}>
                 <div className={n.main_div}>
                     <div className={n.second_div}>
                         <div className={n.final_div}>
                             <img className={n.drop} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccjf9pMV9bPV0DKIIujRUYgcRIFBe3jj86w&usqp=CAU" alt="globe" />
                             <p className={n.drop}>English</p>
                             <ChevronDownIcon />
                             <div>
                                 <div className={n.dropdown_content}>
                                     <div className={n.content}>

                                         <div className={n.para}>
                                             <p >日本語</p>
                                         </div>

                                         <div className={n.para}>
                                             <p >Deutsch</p>
                                         </div>

                                        <div className={n.para}>
                                             <p>English</p>
                                         </div>

                                         <div className={n.para}><p>Español</p></div>

                                         <div className={n.para}> <p>Português</p></div>

                                         <div className={n.para}> <p>Français</p></div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div style={{ justifyContent: "space-between" }} className={n.final_div}>
                             <img className={n.drop} src="https://cdn-icons-png.flaticon.com/512/8089/8089114.png" alt="globe" />
                             <p className={n.drop}>Contact Sales</p>

                         </div>
                     </div>

                     <div className={n.second_div2} >
                      
                         <img className={n.drop} src="https://cdn-icons-png.flaticon.com/512/758/758784.png" alt="search icon" />
                         
                         <Link to="/Login" className={n.drop}>Login</Link>

                        
                         <p className={n.drop}>Customer Support</p>
                        
                         <div className={n.final_div}>
                             <p className={n.drop}>About</p>
                             <div style={{ marginLeft: "-50px" }}>
                                 <ChevronDownIcon />
                                 <div>
                                     <div className={n.dropdown_content2}>
                                         <div className={n.content}>

                                           <div className={n.para2}>
                                                 <p >About Us</p>
                                             </div>

                                             <div className={n.para2}>
                                                 <p >Carrers</p>
                                            </div>

                                             <div className={n.para2}>
                                                 <p>Contact Us</p>
                                             </div>

                                             <div className={n.para2}><p>Invester Relation</p></div>
                                             <div className={n.para2}> <p>Management Teams</p></div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

             </header>
    </div>
  )
}

export default Navbar1


