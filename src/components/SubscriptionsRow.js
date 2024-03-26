import React from 'react';
import './SubscriptionsRow.css';

function SubscriptionsRow({img,name}) {
  return (
    <div className='subscriptionRow'>
        <div className='left'>
            <img className='channellogo' src={img}/>
            <p className='channelname'>{name}</p>
        </div>
        {/* <div className='right'>
            <img className='liveimg' src={live}/>
        </div> */}
      
    </div>
  )
}

export default SubscriptionsRow
