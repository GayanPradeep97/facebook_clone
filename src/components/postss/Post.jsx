
import React, { Component } from 'react'
import './Post.css';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export class Post extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="post">
        <div className="postcontainer">
            <div className="posttop">
                <img src="./images/1.jpg" alt="" className="postimage" />
                <span className="postusername">Gayani</span>
                <span className="posttime">5 min ago</span>
            </div>

            <div className="postcnter">
                <div className="postcaption">
                    Hello Iam Bat man..! vsjdn dvnd dun
                </div>
                <img src="./images/2.jpg" alt="batman" className="postdimage" />
            </div>
            <div className="posbottom">
                <div className="postbottomleft">
                    <RecommendIcon htmlColor='blue' className='reactionpic'/>
                    <FavoriteIcon htmlColor='red' className='reactionpic'/>
                    <EmojiEmotionsIcon htmlColor='orange' className='reactionpic'/>
                    <span className="likecount">batman and 225 other</span>
                </div>
                <div className="postbottomright">
                    <span className="commentcount">50 comments</span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Post