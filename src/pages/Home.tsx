import Button from '@mui/material/Button';
import '../styles/landingPage.css';

function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="hero-container">
        <img src="/hero.jpg" className='hero-container__img'/>
        <div className='hero-container__content'>
          <h2 className='hero-container__heading'>Elevate your everyday</h2>
          <p>Discover a curated collection of premium products designed for the modern lifestyle. Quality meets elegance in every detail.</p>
          <Button variant="contained">Shop Now</Button>
        </div>
      </div>
      </>
  )
}

export default Home;
