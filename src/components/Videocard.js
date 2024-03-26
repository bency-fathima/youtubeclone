import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import './VideoCard.css';

function Videocard(props) {
  return (
    <div className='videocard'>
        <div className='watchlater'><WatchLaterIcon className='videoicon'/></div>
        <div className='playlistadd'><PlaylistAddIcon className='videoicon'/></div>
      <img className='videoimg' src={props.thumbnail}></img>
      <div className='duration'>
     {props.duration}
      </div>
      <div className='videoData'>
        <Avatar src={props.channellogo}></Avatar>
        <div className='channelDetails'>
            <h5>React js netflix tutorial|#5 homepage component</h5>
            <p className='c_name'>{props.channelname}</p>
            <p>{props.views} &bull; {props.time}</p>
        </div>
<MoreVert className='moreIcon'/>
      </div>
    </div>
  )
}

export default Videocard
