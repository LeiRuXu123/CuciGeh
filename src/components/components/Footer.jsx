

const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20">
      <div className="container mx-auto px-4 flex items-center justify-between ">
        <p className="py-4">&copy; Copyright by <span className="font-bold">Cucigeh</span></p>
        <div className="social-footer flex items-center gap-7">
          <h1 className="text-medium">Cuci<span className="text-rose-600">Geh</span></h1>
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
