/* eslint-disable react/jsx-no-comment-textnodes */

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
            <Link to = {second.url} className="tolink">
            <span>{second.text}</span>
            </Link>
          </div>

        ))}

        {/* if user login */}
        <div className='first_menu my-3 mx-2'>
          <span className='mx-1 fw-bold'>You</span>
          <span>
            <FaAngleRight />
          </span>
        </div>

        <div className='first_menu my-3 mx-2'>
          <span>
            <CgProfile />
          </span>
          <span className='mx-1'>Your Channel</span>
        </div>

        <div className='first_menu my-3 mx-1'>
          <span>
            <GoHistory />
          </span>
          <span className='mx-1'>History</span>
        </div>

        <div className='first_menu mx-1'>
          <span>
            <GoVideo />
          </span>
          <span className='mx-1'>Your videos</span>
        </div>

        <div className='first_menu my-3 mx-1'>
          <span>
            <MdHistoryToggleOff />
          </span>
          <span className='mx-1'>Watch later </span>
        </div>

        <div className='first_menu my-3 mx-1'>
          <span>
            <LiaDownloadSolid />
          </span>
          <span className='mx-1'>Download</span>
        </div>

        <div className='first_menu my-3 mx-1'>
          <span>
            <BiLike />
          </span>
          <span className='mx-1'>Liked videos</span>
        </div>

        <div className='first_menu my-1'>
          <span className='mx-1 fw-bold'>Subscriptions</span>
        </div>

        {/* Image and text alignment */}
        <div className='first_menu my-3 mx-1 d-flex align-items-center'>
          <Image
            src='https://media.istockphoto.com/id/1169907641/vector/camera-photo-lens.jpg?s=612x612&w=0&k=20&c=joA29YjSKoGWNmJaEBGzVK23104eOiuKNEuiI5CImD8='
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-1">Klich uh</span>
        </div>
        <div className='first_menu my-3 mx-1 d-flex align-items-center'>
          <Image
            src='data:image/png;base64,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'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-1">Jump Cuts</span>
        </div>
        <div className='first_menu my-3 mx-1 d-flex align-items-center'>
          <Image
            src='https://yt3.googleusercontent.com/ytc/AIf8zZTOA5s3gfjgcl1BomE0nQvkMG8Za5xX6DxOcAytKA=s900-c-k-c0x00ffffff-no-rj'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-1">Eruma Saani</span>
        </div>
        <div className='first_menu my-3 mx-1 d-flex align-items-center'>
          <Image
            src='https://diyaact.com/wp-content/uploads/2022/07/jk-tamil.jpg'
            roundedCircle
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '90%',
              cursor: 'pointer',
              marginLeft: '15px',
            }}
          />
          <span className="mx-1">JK Tamil</span>
        </div>
        <div className='first_menu my-3 mx-1 d-flex align-items-center'>
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
          <span className="mx-1">Batman Factos</span>
        </div>
               

         <div className="first_menu my-3">
           <span className="mx-1 fw-bold">Explore</span>
           <span>
             <FaAngleRight />
           </span>
         </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <LiaFireAltSolid />
           </span>
           <span className="mx-1">Trending</span>
        </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <AiOutlineShopping />
           </span>
           <span className="mx-1">Shopping</span>
       </div>

       <div className="first_menu mx-1">
           <span>
             <RiMusicFill />
           </span>
           <span className="mx-1">Music</span>
        </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <RiMovie2Line />
           </span>
           <span className="mx-1">Movies</span>
         </div>

   <div className="first_menu my-3 mx-1">
         <span>
             <TbLivePhoto />
           </span>
           <span className="mx-1">Live</span>
        </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <SiYoutubegaming />
           </span>
          <span className="mx-1">Gaming</span>
         </div>

         <div className="first_menu mx-1">
           <span>
             <RiNewspaperLine />
           </span>
           <span className="mx-1">News</span>
         </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <GoTrophy />
           </span>
          <span className="mx-1">Sports</span>
         </div>
         <div className="first_menu my-3 mx-1">
           <span>
             <GoLightBulb />
         </span>
           <span className="mx-1">Learning</span>
        </div>

     <div className="first_menu my-3 mx-1">
           <span>
             <GiHanger />
           </span>
           <span className="mx-1">Fashion & Beauty</span>
     </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <MdOutlinePodcasts />
           </span>
           <span className="mx-1">Podcasts</span>
         </div>

         <div className="first_menu my-3">
       <span className="mx-1 fw-bold">More From Youtube</span>
         </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <CgProfile />
           </span>
           <span className="mx-1">Youtube Premium</span>
         </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <GoHistory />
      </span>
           <span className="mx-1">Youtube Studio</span>
         </div>

         <div className="first_menu mx-1">
        <span>
            <GoVideo />           </span>
           <span className="mx-1">Youtube Music</span>
         </div>

         <div className="first_menu my-3 mx-1">
           <span>
             <MdHistoryToggleOff />
           </span>
           <span className="mx-1">Youtube Kids </span>
         </div>


      </div>
    </section>
  );
};

export default Sidebar;

