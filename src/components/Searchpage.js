import React from 'react';
import './Searchpage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Channeltile from './Channeltile';

function Searchpage() {
  return (
    <div className='searchpage'>
      <div className='filter'>
        <TuneOutlinedIcon className='filtericon'/>
        <h2 className='filterheading'>FILTERS</h2>
      </div>
      <Channeltile/>
    </div>
  )
}

export default Searchpage
