import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YoutubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = ({ setsideNavbarFunc, sideNavbar }) => {
  const [userPic, setUserPic] = useState("https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg");
  const [navbarModal, setNavbarModal] = useState(false);

  const handleClickModal = () => {
    setNavbarModal(prev => !prev);
  }

  const handleSidebarToggle = () => {
    setsideNavbarFunc(!sideNavbar);
  }

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div className='navbarHamburger' onClick={handleSidebarToggle}>
            <MenuIcon sx={{ color: 'white' }} />
        </div>
        <div className='navbar-youtubeImg'>
          <div className='navbar-youtubeFlex'>
            <YoutubeIcon sx={{ fontSize: "34px"}} className='youtubeImage' />
            <span className='youtubeTitle'>YouTube</span>
          </div>
        </div>
      </div>

      <div className='navbar-center'>
        <div className='navbar-searchbox'>
          <input type='text' placeholder='Search' className='navbar-searchBoxInput' />
          <div className='navbar-searchBoxIcon'>
            <SearchIcon sx={{ fontSize: "28px", color: 'white' }} />
          </div>
        </div>
        <div className='navbar-mic'>
          <KeyboardVoiceIcon sx={{ color: 'white' }} />
        </div>
      </div>

      <div className='navbar-right'>
        <VideoCallIcon sx={{ color: 'white', fontSize: '30px', cursor: 'pointer'}} />
        <NotificationsIcon sx={{ color: 'white', fontSize: '30px', cursor: 'pointer' }} />
        <img onClick={handleClickModal} className='navbar-profileImg' src={userPic} alt='profile' />

        {navbarModal && 
            <div className='navbar-modal'>
                <div className='navbar-modal-option'>Profile</div>
                <div className='navbar-modal-option'>Logout</div>
                <div className='navbar-modal-option'>Login</div>
              </div>
        }
      </div>
    </div>
  )
}

export default Navbar
