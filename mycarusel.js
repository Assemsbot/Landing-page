import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <div className='container' style={{width:"50%"}}>
    <Carousel data-bs-theme="dark" touch >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./hp4525-mo-bg.png')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./hp4525-mo-bg.png')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./hp4525-mo-bg.png')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;