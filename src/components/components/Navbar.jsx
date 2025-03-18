import { useEffect, useState } from 'react'
import '../styles/Navbar.css'

const navbar = () =>  {
  const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(false)
  const handleClick = () => {
    setShow(!show);
    console.log(show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() =>{
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 5){
        // console.log("testing")
        setScroll(true);
        setShow(false);
      } else{
        setScroll(false);
      };
    });
  });

  let scrollActive =scroll ? "py-6 bg-white shadow": "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}> 
      <div className="container mx-auto px-4 ">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className='sm:text-2xl text-2xl font-bold'>CuciGeh</h1>
          </div>
        <ul className={`flex lg:gap-12 md:static  md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-auto md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-rose-700 font-bold text-white transition-all`}>
            <li className='flex items-center gap-3'>
              <i className="ri-home-line text-3xl md:hidden block"></i>
              <a href='#' className='font-medium opacity-75 hover:text-rose-800'>Beranda</a>
            </li>
            <li className='flex items-center gap-3'>
              <i className="ri-store-2-line text-3xl md:hidden block"></i>
              <a href='#' className='font-medium opacity-75 hover:text-rose-800'>Tentang Kami</a>
            </li>
            <li className='flex items-center gap-3'> 
              <i className="ri-settings-line text-3xl md:hidden block"></i>
              <a href='#'className='font-medium opacity-75 hover:text-rose-800'>Layanan</a>
            </li>
            <li className='flex items-center gap-3'>
              <i className="ri-star-fill text-3xl md:hidden block"></i>
              <a href='#'className='font-medium opacity-75 hover:text-rose-800'>Testimoni</a>
            </li>
          </ul>
          <div className='social flex items-center gap-2'><a href='#' className='social bg-rose-700 px-5 py-2 rounded-full text-white font-bold hover:bg-rose-800 transition-all'>
            Social Media</a>
            <i className="ri-menu-3-line text-3xl md:hidden block " onClick={handleClick}></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
