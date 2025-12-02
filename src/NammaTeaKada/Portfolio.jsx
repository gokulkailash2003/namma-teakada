import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  const location = useLocation();
  const refs = {
    'Wedding Photography': useRef(null),
    'Haldi Ceremony': useRef(null),
    'Mehandi Ceremony': useRef(null),
    'Sangeet Ceremony': useRef(null),
    'Birthday events': useRef(null),
    'Puberty events': useRef(null),
    'Corporate events': useRef(null),
    'Baby Photoshoot': useRef(null),
    'Model photoshoot': useRef(null),
    'Product photoshoot': useRef(null),
    'Ad Shoot': useRef(null),
    'Advertisement': useRef(null)
  };

  useEffect(() => {
    const service = location.state?.service;
    if (service && refs[service] && refs[service].current) {
      refs[service].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.state]);

  return(
    
    <main className="portfolio-main" >
      <section className="portfolio-section1" ref={refs['Wedding Photography']}>
          <div className='wedding-photos'>
            <h2 className="portfolio-title">Our Portfolio</h2> 
          </div >
        
        <section className='wedding-photos-section'>
            <div className='wedding-photos-content'>
                <h2 style={{color:"hsl(38,100%,50%)"}}>Wedding Photographs</h2>
                <p>Our wedding photography seamlessly blends the rich traditions of cultural ceremonies with the spontaneity and joy of candid moments, capturing the true essence and emotion of every couple’s special day. Whether your celebration is grand or intimate, we focus on documenting genuine moments, heartfelt connections, and beautiful details that reflect the uniqueness of your love story. Through a harmonious mix of traditional formal portraits and natural, unscripted interactions, our images tell a complete and vibrant story—from timeless rituals to playful glances and heartfelt embraces—creating an album that evokes both the grandeur and personal spirit of your wedding day, preserving memories that you will cherish for a lifetime.</p>
                  <div className='more-photos-link'>
                    <Link to="/">More Photos</Link>
                  </div>
            </div>
            <div className='wedding-photos-gallery'>
              <img src="\assets\images\portfolio\wedding\Grand Hindu Wedding Ceremony.jpeg" alt="Marriage Photo" />
            </div>
        </section>
      </section >
      

      <section ref={refs['Birthday events']}>
           <section className='wedding-photos-section'>
              <div className='wedding-photos-gallery'>
                <img src="\assets\images\portfolio\birthday\Birthday photo.jpeg" alt="Birthday Photo" />
              </div>
            <div className='wedding-photos-content'>
                <h2 style={{color:"hsl(38,100%,50%)"}}>Birthday Photographs</h2>
                <p>Our birthday photography captures the vibrant spirit and joyous celebrations of every milestone, blending the excitement of candid moments with the special traditions unique to each event. Whether it’s an intimate family gathering or a lively party with friends, we focus on preserving genuine smiles, heartfelt interactions, and the colorful details that make your celebration memorable. Through a perfect balance of posed portraits and spontaneous action shots, our images tell a lively and heartfelt story—from joyful laughter and surprise reactions to tender moments shared between loved ones—creating a collection of photos that reflect the energy and warmth of your birthday celebration, cherished for years to come.</p>
                  <div className='more-photos-link'>
                    <Link to="/bday_photos">More Photos</Link>
                  </div>
            </div>
          </section>
      </section>

      <section ref={refs['Puberty events']}>
          <section className='wedding-photos-section'>
            <div className='wedding-photos-content'>
                <h2 style={{color:"hsl(38,100%,50%)"}}>Puberty Photographs</h2>
                <p>Our puberty ceremony photography thoughtfully captures the meaningful transition and cultural significance of this important milestone, blending the solemn traditions with heartfelt, candid moments that highlight the essence of the occasion. Whether the event is a grand celebration with extended family or an intimate gathering, we focus on documenting genuine emotions, sacred rituals, and the vibrant details that make the day unique. By combining formal portraits with natural, spontaneous interactions, our images tell a complete and touching story—from the reverence of rituals to joyful smiles and emotional embraces—creating a timeless collection that honors the significance of this special rite of passage, preserving memories to cherish forever.</p>
                  <div className='more-photos-link'>
                    <Link to="/">More Photos</Link>
                  </div>
            </div>
            <div className='wedding-photos-gallery'>
              <img src="\assets\images\portfolio\puberty\puberty photo.jpeg" alt="Puberty Photo" />
            </div>
          </section>
      </section>

      <section ref={refs['Corporate events']}>
          <section className='wedding-photos-section'>
              <div className='wedding-photos-gallery'>
                <img src="\assets\images\portfolio\corporate\corporate photo.jpeg" alt="Corporate Event Photo" />
              </div>
            <div className='wedding-photos-content'>
                  <h2 style={{color:"hsl(38,100%,50%)"}}>Corporate Event Photographs</h2>
                  <p>Our corporate event photography expertly captures the professional atmosphere and dynamic energy of every gathering, blending the formality of structured moments with the candid interactions that reveal authentic connections. Whether it’s a large conference, a product launch, or an intimate team meeting, we focus on documenting meaningful exchanges, keynote speeches, and the vibrant details that define the event’s purpose. By balancing posed group shots with spontaneous moments, our images tell a comprehensive and engaging story—from the seriousness of presentations to the warmth of networking smiles—creating a polished collection that reflects the professionalism and spirit of your corporate event, preserving memories that enhance your brand’s narrative.</p>
                  <div className='more-photos-link'>
                  <Link to="/">More Photos</Link>
                  </div>
            </div>
         </section>
      </section>

      <section ref={refs['Baby Photoshoot']}>
           <section className='wedding-photos-section'>
              <div className='wedding-photos-content'>
                  <h2 style={{color:"hsl(38,100%,50%)"}}>Baby Photoshoot </h2>
                  <p>Our baby photoshoot photography tenderly captures the innocence, joy, and precious milestones of early life, blending soft, intimate portraits with playful, candid moments that celebrate your little one’s unique personality. Whether in a cozy home setting or a whimsical studio, we focus on preserving genuine expressions, tiny details, and the loving bonds shared with family. By combining carefully styled shots with spontaneous interactions, our images tell a heartfelt story—from peaceful naps and curious gazes to joyful giggles and gentle embraces—creating a timeless collection that you will cherish forever as a beautiful memory of your baby’s earliest days.</p>
                  <div className='more-photos-link'>
                  <Link to="/baby_shoot">More Photos</Link>
                </div>
              </div>
              <div className='wedding-photos-gallery'>
                <img style={{height:"90%", marginRight:"-80px"}} src="\assets\images\portfolio\baby photoshoot\baby photoshoot.jpg" alt="Baby Photoshoot" />
            </div>
         </section>
      </section>

      <section ref={refs['Model photoshoot']}>
             <section className='wedding-photos-section'>
              <div className='wedding-photos-gallery'>
                <img src="\assets\images\portfolio\model photoshoot\model photoshoot.jpeg" alt="Marriage Photo" />
            </div>
            <div className='wedding-photos-content'>
                  <h2 style={{color:"hsl(38,100%,50%)"}}>Model Photoshoot</h2>
                  <p>Our model photoshoot photography is designed to showcase individuality, style, and confidence through striking, polished images that highlight both personality and versatility. Whether capturing high-fashion editorial looks, commercial portfolios, or creative concepts, we focus on bringing out the best in every model by blending artful lighting, dynamic poses, and authentic expressions. Our approach balances meticulous preparation with spontaneous creativity, resulting in a diverse collection that not only enhances professional portfolios but also tells a compelling visual story unique to each model’s journey and aspirations.</p>
                  <div className='more-photos-link'>
                  <Link to="/">More Photos</Link>
                </div>
              </div>
         </section>
      </section>

      <section ref={refs['Product photoshoot']}>
           <section className='wedding-photos-section'>
              <div className='wedding-photos-content'>
                  <h2 style={{color:"hsl(38,100%,50%)"}}>Product Photoshoot</h2>
                  <p>Our product photoshoot photography is crafted to highlight the distinctive qualities and craftsmanship of every product with precision and artistry. Whether for e-commerce, advertising campaigns, or brand storytelling, we focus on capturing clean, detailed, and visually appealing images that emphasize texture, color, and design. Our approach combines expert lighting techniques, thoughtful composition, and attention to every small detail, resulting in a collection of photographs that not only showcase the product effectively but also enhance its market appeal and customer engagement by telling a compelling visual story.</p>
                  <div className='more-photos-link'>
                  <Link to="/">More Photos</Link>
                </div>
              </div>
              <div className='wedding-photos-gallery'>
                <img src="\assets\images\portfolio\wedding\Grand Hindu Wedding Ceremony.jpeg" alt="Marriage Photo" />
            </div>
         </section>
      </section>

      <section ref={refs['Ad Shoot']}>
         <section className='wedding-photos-section'>
              <div className='wedding-photos-gallery'>
                <img src="\assets\images\portfolio\wedding\Grand Hindu Wedding Ceremony.jpeg" alt="Marriage Photo" />
            </div>
            <div className='wedding-photos-content'>
                  <h2 style={{color:"hsl(38,100%,50%)"}}>Ad Shoot</h2>
                  <p>Our ad shoot photography is focused on creating powerful, eye-catching visuals that effectively convey your brand’s message and captivate your target audience. Whether for digital platforms, print media, or broadcast, we blend creative concepts with sharp execution to produce dynamic images that resonate emotionally and inspire action. By combining innovative styling, precise lighting, and compelling storytelling, our ad shoots elevate your campaign’s impact, ensuring your products, services, or ideas are presented with clarity, creativity, and maximum appeal.</p>
                  <div className='more-photos-link'>
                  <Link to="/">More Photos</Link>
                </div>
              </div>
         </section>
      </section>

      <section ref={refs['Advertisement']}>
         <section className='wedding-photos-section'>
              <div className='wedding-photos-content'>
                  <h2 style={{color:"hsl(38,100%,50%)"}}>Advertisement</h2>
                  <p>Our advertisement photography is dedicated to crafting visually compelling images that communicate your brand’s identity and values with clarity and creativity. Designed to engage and persuade, these photographs serve as the cornerstone for impactful marketing campaigns across various media. By merging imaginative concepts, meticulous attention to detail, and strategic visual storytelling, we create advertisements that not only captivate viewers but also drive brand recognition and customer action effectively.</p>
                  <div className='more-photos-link'>
                  <a href="/">More Photos</a>
                </div>
              </div>
              <div className='wedding-photos-gallery'>
                <img  src="\assets\images\portfolio\wedding\Grand Hindu Wedding Ceremony.jpeg" alt="Marriage Photo" />
            </div>
         </section>
         
      </section>

      
    </main>
  );
}

export default Portfolio;
