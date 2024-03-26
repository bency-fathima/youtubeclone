import React, { useEffect } from 'react';
import './Tags.css';
import {NavigateNext} from '@mui/icons-material'

function Tags() {
    useEffect(() => {
        const tags = document.querySelectorAll('.mini-Tags'); // Use querySelectorAll to get all matching elements
        if (tags) {
          tags.forEach(tag => {
            tag.addEventListener("click", () => {
              tags.forEach(t => {
                t.classList.remove("active");
              });
              tag.classList.add("active");
            });
          });
        }
      }, []); // Empty dependency array means this effect runs only once after the initial render
      



  return (
    <div className='Tags'>
        <div className='mini-Tags active'>
            All
        </div>
        <div className='mini-Tags'>
            Music
        </div><div className='mini-Tags'>
            Mixes
        </div><div className='mini-Tags'>
            Game shows
        </div><div className='mini-Tags'>
            Live
        </div><div className='mini-Tags'>
            AI
        </div>
        <div className='mini-Tags'>
            Cooking shows
        </div><div className='mini-Tags'>
            Biology
        </div><div className='mini-Tags'>
            Movies
        </div>
        <div className='mini-Tags'>
            Chemistry
        </div>
        <NavigateNext className='next'/>
      
    </div>
  )
}

export default Tags
