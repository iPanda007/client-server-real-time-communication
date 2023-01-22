import React from 'react'
import './navbar.css'
import Notification from '../../img/notification.svg';
import Message from '../../img/message.svg';
import Setting from  '../../img/settings.svg'
const Navbar = () => {
  return (
    <div>
          <div className='navbar'>
              <span className='logo'>Mi App</span>
              <div className="icons">
                  <div className="icon">
                      <img className='iconImg' src={Notification} alt="" />
                      <div className='counter' >2</div>
                  </div>
                  <div className="icon">
                      <img className='iconImg' src={Message} alt="" />
                      <div className='counter' >2</div>
                  </div>
                  <div className="icon">
                      <img className='iconImg' src={Setting} alt="" />
                      <div className='counter' >2</div>
                  </div>
              </div>
       </div>
    </div>
  )
}

export default Navbar
