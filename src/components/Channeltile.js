import React from 'react';
import './Channeltile.css';
import { NotificationsActive } from '@mui/icons-material';

function Channeltile() {
  return (
    <div className='channeltile'>
<div className='tile_left'>
    <img className='channelimg' src='https://yt3.googleusercontent.com/ytc/AIdro_kvCRmW8z38ccUGXzs2jPGC7-LTaV7n-nZBhERSMQ=s176-c-k-c0x00ffffff-no-rj'/>
    </div>  
    <div className='tile_middle'>
        <p className='channelname'>Debug Media</p>
        <p style={{fontSize:"13px",letterSpacing:"0.3px",color:"#606060"}}>1K subscrbers &bull; 50 videos</p>
        </div>    
        <div className='tile_right'>
            <button className='subscribe'>SUBSCRIBED</button>
            <NotificationsActive className='bellicon'></NotificationsActive>
        </div>
    </div>
  )
}

export default Channeltile
