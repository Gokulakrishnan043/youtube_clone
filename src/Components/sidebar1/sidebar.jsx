/* eslint-disable react/jsx-no-comment-textnodes */

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { sidebarFistContent } from '../../data1/Data.jsx';
import { FaAngleRight } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { GoHistory, GoVideo, GoTrophy, GoLightBulb } from 'react-icons/go';
import { MdHistoryToggleOff, MdOutlinePodcasts } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { RiMusicFill, RiMovie2Line, RiNewspaperLine } from 'react-icons/ri';
import { TbLivePhoto } from 'react-icons/tb';
import { GiHanger } from 'react-icons/gi';
import { SiYoutubegaming } from 'react-icons/si';
import { LiaDownloadSolid, LiaFireAltSolid } from 'react-icons/lia';
import { BiLike } from 'react-icons/bi';
import { Image } from 'react-bootstrap';
import './sidebar.scss';

const Sidebar = () => {
  const [name, setName] = useState(sidebarFistContent);

  return (
    <section id='first'>
      <div className='first'>
        {name.map((second) => (
          <div className='micons' key={second.text}>
            <span>{second.icon}</span>
            <span>{second.text}</span>
          </div>
        ))}

        {/* if user login */}
        <div className='first_menu my-3'>
          <span className='mx-3 fw-bold'>You</span>
          <span>
            <FaAngleRight />
          </span>
        </div>

        <div className='first_menu my-3 mx-3'>
          <span>
            <CgProfile />
          </span>
          <span className='mx-3'>Your Channel</span>
        </div>

        <div className='first_menu my-3 mx-3'>
          <span>
            <GoHistory />
          </span>
          <span className='mx-3'>History</span>
        </div>

        <div className='first_menu mx-3'>
          <span>
            <GoVideo />
          </span>
          <span className='mx-3'>Your videos</span>
        </div>

        <div className='first_menu my-3 mx-3'>
          <span>
            <MdHistoryToggleOff />
          </span>
          <span className='mx-3'>Watch later </span>
        </div>

        <div className='first_menu my-3 mx-3'>
          <span>
            <LiaDownloadSolid />
          </span>
          <span className='mx-3'>Download</span>
        </div>

        <div className='first_menu my-3 mx-3'>
          <span>
            <BiLike />
          </span>
          <span className='mx-3'>Liked videos</span>
        </div>

        <div className='first_menu my-3'>
          <span className='mx-3 fw-bold'>Subscriptions</span>
        </div>

        {/* Image and text alignment */}
        <div className='first_menu my-3 mx-3 d-flex align-items-center'>
          <Image
            src='https://e0.pxfuel.com/wallpapers/157/698/desktop-wallpaper-dark-knight-batman-logo.jpg'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-3">Klich uh</span>
        </div>
        <div className='first_menu my-3 mx-3 d-flex align-items-center'>
          <Image
            src='https://e0.pxfuel.com/wallpapers/157/698/desktop-wallpaper-dark-knight-batman-logo.jpg'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-3">Klich uh</span>
        </div>
        <div className='first_menu my-3 mx-3 d-flex align-items-center'>
          <Image
            src='https://e0.pxfuel.com/wallpapers/157/698/desktop-wallpaper-dark-knight-batman-logo.jpg'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-3">Klich uh</span>
        </div>
        <div className='first_menu my-3 mx-3 d-flex align-items-center'>
          <Image
            src='https://e0.pxfuel.com/wallpapers/157/698/desktop-wallpaper-dark-knight-batman-logo.jpg'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-3">Klich uh</span>
        </div>
        <div className='first_menu my-3 mx-3 d-flex align-items-center'>
          <Image
            src='https://e0.pxfuel.com/wallpapers/157/698/desktop-wallpaper-dark-knight-batman-logo.jpg'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-3">Klich uh</span>
        </div>
               

         <div className="first_menu my-3">
           <span className="mx-3 fw-bold">Explore</span>
           <span>
             <FaAngleRight />
           </span>
         </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <LiaFireAltSolid />
           </span>
           <span className="mx-3">Trending</span>
        </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <AiOutlineShopping />
           </span>
           <span className="mx-3">Shopping</span>
       </div>

       <div className="first_menu mx-3">
           <span>
             <RiMusicFill />
           </span>
           <span className="mx-3">Music</span>
        </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <RiMovie2Line />
           </span>
           <span className="mx-3">Movies</span>
         </div>

   <div className="first_menu my-3 mx-3">
         <span>
             <TbLivePhoto />
           </span>
           <span className="mx-3">Live</span>
        </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <SiYoutubegaming />
           </span>
          <span className="mx-3">Gaming</span>
         </div>

         <div className="first_menu mx-3">
           <span>
             <RiNewspaperLine />
           </span>
           <span className="mx-3">News</span>
         </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <GoTrophy />
           </span>
          <span className="mx-3">Sports</span>
         </div>
         <div className="first_menu my-3 mx-3">
           <span>
             <GoLightBulb />
         </span>
           <span className="mx-3">Learning</span>
        </div>

     <div className="first_menu my-3 mx-3">
           <span>
             <GiHanger />
           </span>
           <span className="mx-3">Fashion & Beauty</span>
     </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <MdOutlinePodcasts />
           </span>
           <span className="mx-3">Podcasts</span>
         </div>

         <div className="first_menu my-3">
       <span className="mx-3 fw-bold">More From Youtube</span>
         </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <CgProfile />
           </span>
           <span className="mx-3">Youtube Premium</span>
         </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <GoHistory />
      </span>
           <span className="mx-3">Youtube Studio</span>
         </div>

         <div className="first_menu mx-3">
        <span>
            <GoVideo />           </span>
           <span className="mx-3">Youtube Music</span>
         </div>

         <div className="first_menu my-3 mx-3">
           <span>
             <MdHistoryToggleOff />
           </span>
           <span className="mx-3">Youtube Kids </span>
         </div>


      </div>
    </section>
  );
};

export default Sidebar;

