import HeroImage from '../assets/images/hero.svg'
import AboutImage from '../assets/images/about.svg'
import RegularImage from '../assets/images/regular.svg'
import ExpressImage from '../assets/images/express.svg'
import UnyellowingImage from '../assets/images/unyellowing.svg'
import PelangganImage from '../assets/images/pelanggan.svg'


const home = () => {
  return (
    <div className="home pb-10">
      <div className="container mx-auto px-4">
        <div className="hero-section grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7"> Kami Hadir Untuk <span className="text-rose-600">Memenuhi Kebutuhan Fashion Anda</span></h1>
            <p className='text-base/8 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quae doloribus magnam? Consectetur, aspernatur laudantium labore, voluptatibus, necessitatibus nam voluptatem qui alias eveniet doloribus soluta tempore? Id animi nihil et?</p>
            <a href='#' className='bg-rose-600 hover:bg-rose-700 transition-all py-2 px-4 text-white shadow rounded-full'> 
              Tentang Kami<i className='ri-eye-line ms-1'></i>
              </a>
          </div>
          <div className='box'>
            <img src={HeroImage} alt='Hero' className='md:w-full w-[400px] mx-auto md:m-0'></img>
          </div>
        </div>
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32 mt-20">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt='About'className='lg:w-[500px] w-[400px] md:m-0 mx-auto'></img>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className='lg:text-5xl/tight text-3xl font-medium mb-7 text-rose-600'>Tentang Kami</h1>
            <p className='text-base/loose'>CuciGeh merupakan usaha serta wadah yang menyediakan jasa untuk jasa cuci sepatu dengan misi untuk mempermudah pengguna mencari tempat cuci sepatu yang dibutuhkan.
            </p>
          </div>
        </div>
        <div className="services pt-32 bg-linear-85">
          <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-7 text-rose-600'>Layanan</h1>
          <p className='text-center'>Berikut adalah layanan yang kami berikan</p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-slate-600 rounded-lg shadow p-4">
              <img src={RegularImage} alt='Regular'></img>
              <i className="ri-number-1 text-3xl text-white">
                <h3 className='text-xl font-bold text-white mb-2 mt-6'>Reguler Cleaning</h3>
                <h4 className='text-white text-base/loose font-bold'>Harga</h4>
                <p>Rp.35.000</p>
                <h3 className='bg-stone-900 rounded rounded-full shadow text-center  mt-5'>Detail</h3>
              </i>
            </div>
            <div className="box bg-slate-600 rounded-lg shadow p-4">
            <img src={ExpressImage} alt='Express'></img>
              <i className="ri-number-2 text-3xl text-white">
                <h3 className='text-xl font-bold text-white mb-2 mt-6'>Express Cleaning</h3>
                <h4 className='text-white text-base/loose font-bold'>Harga</h4>
                <p>Rp.50.000</p>
                <h3 className='bg-stone-900 rounded rounded-full shadow text-center mt-4'>Detail</h3>
              </i>
            </div>
            <div className="box bg-slate-600 rounded-lg shadow p-4">
            <img src={UnyellowingImage} alt='Unyellowing'></img>
              <i className="ri-number-3 text-3xl text-white">
                <h3 className='text-xl font-bold text-white mb-2 mt-6'>Unyellowing</h3>
                <h4 className='text-white text-base/loose font-bold'>Harga</h4>
                <p>Rp.80.000</p>
                <h3 className='bg-stone-900 rounded rounded-full shadow text-center  mt-5'>Detail</h3>
              </i>
            </div>
          </div>
        </div>
        <div className="Testimoni pt-32">
        <h1 className='text-center lg:text-5xl/tight text-5xl font-medium mb-7'>Testimoni</h1>
        <p className='text-center text-rose-600 text-3xl font-medium'>Apa Kata <span className='underline text-black'>Customer</span> Kami</p>
        <div className="testimoni-box ">
          <div className="box bg-rose-700 rounded rounded-b-none mt-8 bg-[auto_100px]">
            <img src={PelangganImage} alt='Pelanggan'className=' w-[200px] mx-auto bg-lime-50 '></img>
            <h2 className='text-2xl font-medium text-center bg-lime-50 p-4'>Tommy</h2>
            <p className='font-medium text-center bg-lime-50 p-4' >Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke orang lain.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default home
