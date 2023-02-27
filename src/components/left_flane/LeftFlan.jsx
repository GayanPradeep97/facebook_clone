import React from 'react'
import './LeftFlane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';


function LeftFlan() {
  return (
    <div className='leftflanBox'>

        <div className="lefticontainer">

            <div className="leftflanMenu">

                <li className='leftflanitem'>
                  <MarkUnreadChatAltIcon className='icon'/>
                  <span classname='text'>Message</span>
                </li>
                <li className='leftflanitem'>
                  <GroupIcon className='icon'/>
                  <span classname='text'>Groups</span>
                </li>
                <li className='leftflanitem'>
                  <RssFeedIcon className='icon'/>
                  <span classname='text'>Feed</span>
                </li>
                <li className='leftflanitem'>
                  <FlagIcon className='icon'/>
                  <span classname='text'>Pages</span>
                </li>
                <li className='leftflanitem'>
                  <CalendarMonthIcon className='icon'/>
                  <span classname='text'>Events</span>
                </li>
                <li className='leftflanitem'>
                  <SettingsIcon className='icon'/>
                  <span classname='text'>Setting</span>
                </li>
                <li className='leftflanitem'>
                  <SportsEsportsIcon className='icon'/>
                  <span classname='text'>Games</span>
                </li>
                <li className='leftflanitem'>
                  <NewspaperIcon className='icon'/>
                  <span classname='text'>News</span>
                </li>
                <li className='leftflanitem'>
                  <WorkIcon className='icon'/>
                  <span classname='text'>Jobs</span>
                </li>
                <li className='leftflanitem'>
                  <StoreIcon className='icon'/>
                  <span classname='text'>Store</span>
                </li>

                <hr/>
                <div className="pageYouLiked">
                  <h3>Pages you Liked</h3>
                </div>

                <div className="pagelist">
                <li classname='pagelistItem'>
                  <img src='/images/1.jpg' alt='imag' className='pagePic'/>
                  <span className='pageNum'>Gayan</span>
                </li>
                <li classname='pagelistItem'>
                  <img src='/images/1.jpg' alt='imag' className='pagePic'/>
                  <span className='pageNum'>Gayan</span>
                </li>
                <li classname='pagelistItem'>
                  <img src='/images/1.jpg' alt='imag' className='pagePic'/>
                  <span className='pageNum'>Gayan</span>
                </li>
                <li classname='pagelistItem'>
                  <img src='/images/1.jpg' alt='imag' className='pagePic'/>
                  <span className='pageNum'>Gayan</span>
                </li>
                <li classname='pagelistItem'>
                  <img src='/images/1.jpg' alt='imag' className='pagePic'/>
                  <span className='pageNum'>Gayan</span>
                </li>
                <li classname='pagelistItem'>
                  <img src='/images/1.jpg' alt='imag' className='pagePic'/>
                  <span className='pageNum'>Gayan</span>
                </li>
                </div>
                
          
            </div>
          
        </div>
    </div>
  )
}

export default LeftFlan 