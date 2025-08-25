import './Sidebar.css'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ContentCutIcon from '@mui/icons-material/ContentCut';


const Sidebar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar ? 'home-sidebar': "homeSidebarHide"}>
      <div className='home-sidebarTop'>
        <div className='home-sidebarTopOption'>
            <HomeIcon />
            <div className='home-sidebarTopOptionTitle'>Home</div>
        </div>
        <div className='home-sidebarTopOption'>
            <VideocamIcon />
            <div className='home-sidebarTopOptionTitle'>Shorts</div>
        </div>
        <div className='home-sidebarTopOption'>
            <SubscriptionsIcon />
            <div className='home-sidebarTopOptionTitle'>Subscriptions</div>
        </div>
      </div>
      <div className='home-sidebarMiddle'>
        <div className='home-sidebarTopOption'>
            <div className='home-sidebarTopOptionTitle'>You</div>
            <ChevronRightIcon />
        </div>
        <div className='home-sidebarTopOption'>
            <RecentActorsIcon />
            <div className='home-sidebarTopOptionTitle'>Your Channel</div>
        </div>
        <div className='home-sidebarTopOption'>
            <HistoryIcon />
            <div className='home-sidebarTopOptionTitle'>History</div>
        </div>
        <div className='home-sidebarTopOption'>
            <PlaylistPlayIcon />
            <div className='home-sidebarTopOptionTitle'>Playlist</div>
        </div>
        <div className='home-sidebarTopOption'>
            <OndemandVideoIcon />
            <div className='home-sidebarTopOptionTitle'>My Videos</div>
        </div>
        <div className='home-sidebarTopOption'>
            <WatchLaterIcon />
            <div className='home-sidebarTopOptionTitle'>Watch Later</div>
        </div>
        <div className='home-sidebarTopOption'>
            <ThumbUpIcon />
            <div className='home-sidebarTopOptionTitle'>Liked Videos</div>
        </div>
        <div className='home-sidebarTopOption'>
            <ContentCutIcon />
            <div className='home-sidebarTopOptionTitle'>Your Clips</div>
        </div>
      </div>

      <div className='home-sidebarMiddle'>
        <div className='home-sidebarTopOption'>
            <div className='home-sidebarTopOptionTitleHeader'> Subscriptions</div>
        </div>
        <div className='home-sidebarTopOption'>
            <img className='home-sidebarLogo' src='https://i.pinimg.com/originals/6b/cb/e1/6bcbe10420ae10b82b550b3d4adeb13e.jpg' alt='logo'/>
            <div className='home-sidebarTopOptionTitle'> Mr. ABC</div>
        </div>

        <div className='home-sidebarTopOption'>
            <img className='home-sidebarLogo' src='https://i.pinimg.com/originals/6b/cb/e1/6bcbe10420ae10b82b550b3d4adeb13e.jpg' alt='logo'/>
            <div className='home-sidebarTopOptionTitle'> Mr. XYZ</div>
        </div>

        <div className='home-sidebarTopOption'>
            <img className='home-sidebarLogo' src='https://i.pinimg.com/originals/6b/cb/e1/6bcbe10420ae10b82b550b3d4adeb13e.jpg' alt='logo'/>
            <div className='home-sidebarTopOptionTitle'> Mr. PQR</div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
