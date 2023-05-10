function Gallery() {
  return (
    <div className='gallery'>
      {/* {[...new Array(4)].map((v, i) => (
        <div className={`img img-${i + 1}`} key={i + 1}></div>
      ))} */}
      <div className='box'>
        <div className='img img-one'></div>
        <div className='box-info'>
          <h2>Responsive Design</h2>
          <p>
            Whether bringing amazing products and services to the creative
            market.
          </p>
        </div>
      </div>
      <div className='box'>
        <div className='img img-two'></div>
        <div className='box-info'>
          <h2>24/7 Online Support</h2>
          <p>
            Whether bringing amazing products and services to the creative
            market.
          </p>
        </div>
      </div>
      <div className='box'>
        <div className='img img-three'></div>
        <div className='box-info'>
          <h2>Quality Product</h2>
          <p>
            Whether bringing amazing products and services to the creative
            market.
          </p>
        </div>
      </div>
      <div className='box'>
        <div className='img img-four'></div>
        <div className='box-info'>
          <h2>Productivity Software</h2>
          <p>
            Whether bringing amazing products and services to the creative
            market.
          </p>
        </div>
        </div>
    </div>
  );
};

export default Gallery;