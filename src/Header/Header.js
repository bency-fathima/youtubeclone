import React from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TheatersIcon from '@mui/icons-material/Theaters';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SidebarRow from '../components/SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import './sidebar.css';
import SubscriptionsRow from '../components/SubscriptionsRow';
 
function Header() {
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        const miniSidebar = document.querySelector('.mini-sidebar');
    
        if (sidebar) {
            sidebar.classList.toggle('active');
        }
        if (miniSidebar) {
            miniSidebar.classList.toggle('active');
        }
    }
    
    
  return (
    <div>
    <div className='parent-header'>
      <div className='header-left'>
        <div onClick={toggleSidebar}>
            <MenuIcon/>
        </div>


        <a href="https://www.youtube.com">
            <YouTubeIcon className='header-logo' style={{color:"red",fontSize:"35px"}}/>
         </a>
         <span className='logo-text'>YouTube</span>
        </div>


        <div className='header-input'>
            <div className='header-middle'>
        <input className='searchInputs' placeholder='search' type='text'/>
        <SearchIcon className='header-searchbtn'/>
        
        </div>
        <MicIcon className='header-iconsmic'/>
        </div>


        <div className='header-right'>
        <VideoCallIcon className='header-icons'/>
        <AppsIcon/>
        <NotificationsIcon className='header-icons'/>
        {/* <Avatar/> */}
        </div>
      </div>


      <div className='sidebar'>
        <SidebarRow icon={HomeIcon} title="Home"/>
        <SidebarRow icon={ExploreIcon} title="Explore"/>
        <SidebarRow icon={SubscriptionsIcon} title="Subscription"/>
        <hr></hr>
        <SidebarRow icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow icon={HistoryIcon} title="History"/>
        <SidebarRow icon={OndemandVideoIcon} title="Your videos"/>
        <SidebarRow icon={WatchLaterIcon} title="Watched videos"/>
        <SidebarRow icon={ThumbUpIcon} title="Liked videos"/>
        <SidebarRow icon={ExpandMoreIcon} title="Show more"/>
        <hr></hr>
        <h4 className='sidebar-heading'>SUBSCRIPTIONS</h4>
        <SubscriptionsRow img="https://yt3.googleusercontent.com/ytc/AIdro_kz0qu3aeTtMeYeEq_5Otg4UCA_P6ptP1PESvORsA=s176-c-k-c0x00ffffff-no-rj" name="karikk"/>
        <SubscriptionsRow img="https://yt3.googleusercontent.com/vTYTk36_aEar_yUGIk7nl1eDDlfRlgabUUdzIsQiZse9Mcm51LIZCNYRxG7D2cufoYHfTJkU=s176-c-k-c0x00ffffff-no-rj" name="Just Easy"/>
        <SubscriptionsRow img="https://yt3.googleusercontent.com/ytc/AIdro_kvCRmW8z38ccUGXzs2jPGC7-LTaV7n-nZBhERSMQ=s176-c-k-c0x00ffffff-no-rj" name="Debug Media"/>
        <SubscriptionsRow img="https://yt3.googleusercontent.com/ytc/AIdro_mrd2MBxmD6H939RooJmbobwhs7O7ixARER6jyR=s176-c-k-c0x00ffffff-no-rj" name="Code Malayalam"/>
        <SidebarRow icon={ExpandMoreIcon} title="Show more"/>
        <hr></hr>
        <h4 className='sidebar-heading'>MORE ON YOUTUBE</h4>
        <SidebarRow icon={YouTubeIcon} title="Youtube premium"/>
        <SidebarRow icon={TheatersIcon} title="Movies"/>
        <SidebarRow icon={SportsEsportsIcon} title="Games"/>
        <hr></hr>
        <SidebarRow icon={SettingsIcon} title="Settings"/>
        <SidebarRow icon={FlagIcon} title="History"/>
        <SidebarRow icon={HelpIcon} title="Help"/>
        <SidebarRow icon={FeedbackIcon} title="Feedback"/>
        <div className='footer'>
            <p>About &nbsp; Press &nbsp; Copyright</p>
            <p>Contact us &nbsp; Creators</p>
            <p>Advertise &nbsp; Developers</p>
            <br>
            </br>
            <p>Terms &nbsp; Privacy &nbsp; Policy $ Safety</p>
            <p>How youtube works</p>
            <p>Test new features</p>
            <br></br>
            <p style={{color:"rgb(142,142,142)"}}>&nbsp;2024  Google LLC</p>
        </div>




      </div>
      <div className='mini-sidebar'>
        <div className='mini-div'>
            <HomeIcon/>
            <p>Home</p>
        </div>
        <div className='mini-div'>
            <ExploreIcon/>
            <p>Explore</p>
        </div>
        <div className='mini-div'>
            <SubscriptionsIcon/>
            <p>Subscriptions</p>
        </div>
        <div className='mini-div'>
            <VideoLibraryIcon/>
            <p>You</p>
        </div>
      </div>
      </div>
   )
}

export default Header
