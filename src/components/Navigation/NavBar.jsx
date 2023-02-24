import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './NavBar.css' 

function NavBar() {
  return (
    <div className="navbarbox">
        <div className="navbarleft">
            <span className="logo">facebook</span>
        </div>
        
        <div className="navbarcenter">
            <div className="searchbarbox">
                <SearchIcon className='searchIcon'/>
                <input type="text" placeholder='search for your friend'/>
            </div>
        </div>

        <div className="navbarright">
            <div className="navbarlinks">
            <ul>
                <li><a href='home'>Home</a></li>
                <li><a href='home'>profile</a></li>               
            </ul>
            </div>

            <div className="navbaricons">
                <div className="navbaricon">
                    <PersonIcon/>
                    <span className='icontag'>2</span>
                </div>
                <div className="navbaricon">
                    <MessageIcon/>
                    <span className='massagetag'>5</span>
                </div>
                <div className="navbaricon">
                    <SettingsIcon/>
                    <span className='settingtag'>1</span>
                </div>
            </div>  
            <div className='pic'>
                <img src='/images/1.jpg' alt='' className='profilepic' />
            </div>
        </div>


    </div>
  )
}

export default NavBar