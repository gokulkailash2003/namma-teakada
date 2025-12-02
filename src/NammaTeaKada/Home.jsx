import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const marqueeRef = useRef(null);
  return (
    <main>
      <section className="section1">
        <div className="cont1" style={{backgroundImage: "url('/assets/images/IMG_0646.JPG')",  backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <h1 className="home-title">
          <span className="home-highlight">We Capture,</span><br />
          <span className="home-shine" >You Shine.</span>
        </h1>
        <div className="home-para">
        <p className="subtitle">
          Create Phototraphy like never before - Creative, Effortless and Extraordinary.<br />From dreamy portraits to dynamic events, our team transforms every moments into timeless memories.<br /> Join our growing community and discover why our clients love working with us.
        </p>
        </div>

        <div className="cta-buttons">
          
          <Link to="/contact" className="cta-btn">Book a session</Link>
        </div>
        </div>
      </section>



      <section style={{backgroundColor: "black"}} className="section2">
        <div className="homeimg">
          <img src="/assets/images/IMG_0640.JPG" alt="image" />
        </div>
        <div  className="cont2">
        <h2 className="about-title">The Artistry Behind Our Photography</h2>
        <p>
          At <span style={{color:"hsl(38, 100%, 50%)"}} className="brand">Namma Teakada</span>, we offer a range of photography services, including <b>portrait</b>, <b>nature</b>, and <b>event photography</b>. Our team of talented photographers is dedicated to delivering exceptional results that exceed your expectations.
        </p>
        <p>
          <span className="priority">Your satisfaction is our top priority.</span> Let's work together to create something beautiful.
        </p>
        </div>
      </section>

     <section className="section3"> 
      
      
      <marquee
          behavior="scroll"
          direction="left"
          scrollamount="18"
          loop="infinite"
          // onMouseOver={() => marqueeRef.current.stop()}
          // onMouseOut={() => marqueeRef.current.start()}
          ref={marqueeRef}
        >
          <div className="scroll-img">
            {/* <img src="nammateakada/src/assets/images/tom.gif" alt="GIF" /> */}
            <img src="/assets/images/IMG_0632.JPG" alt="Image 1" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0633.JPG" alt="Image 2" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0634.JPG" alt="Image 3" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0635.JPG" alt="Image 4" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0636.JPG" alt="Image 5" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0637.JPG" alt="Image 6" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0638.JPG" alt="Image 7" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0639.JPG" alt="Image 8" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0640.JPG" alt="Image 9" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0641.JPG" alt="Image 10" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0642.JPG" alt="Image 11" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0643.JPG" alt="Image 12" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0644.JPG" alt="Image 13" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0645.JPG" alt="Image 14" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0646.JPG" alt="Image 15" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0647.JPG" alt="Image 16" style={{ height: '0vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0648.JPG" alt="Image 17" style={{ height: '80vh', marginRight: '10px' }} />
            <img src="/assets/images/IMG_0649.JPG" alt="Image 18" style={{ height: '80vh', marginRight: '10px' }} />
        </div>
      </marquee>
    </section> 

    </main>
  );
}
export default Home;