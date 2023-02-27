import React from 'react'
import './Addpost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SellIcon from '@mui/icons-material/Sell';

function Addpost() {
  return (
    <div className='addpost'>
        <div className="addpostcontainer">
            <div className="addposttop">
                <img src="./images/1.jpg" alt="" className="addpostpic" />
                <input type="text" className="addpostinput" placeholder='whts in your mind' />
            </div>
            <hr className='addposthr'/>

            <div className="addpostbottom">
                <div className="addpostoptions">
                    <div className="addpostoption">
                        <InsertPhotoIcon className='addphoto' htmlColor='orange'/>
                        <span className='addphotooptiontext'>Add Photo/video</span>
                    </div>
                    <div className="addpostoption">
                        <AddLocationAltIcon htmlColor='red' className='addphoto'/>
                        <span className='addphotooptiontext'>Add Location</span>
                    </div>
                    <div className="addpostoption">
                        <SellIcon htmlColor='blue' className='addphoto'/>
                        <span className='addphotooptiontext'>Add Tag</span>
                    </div>
                    <div className="addpostoption">
                        <LiveTvIcon htmlColor='tomato' className='addphoto'/>
                        <span className='addphotooptiontext'>Go Live</span>
                    </div>
                    <button className='postbutton'>Post</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Addpost