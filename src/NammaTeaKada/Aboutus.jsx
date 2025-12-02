import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <div className="about-container">
      <h1 style={{color:"hsl(38,100%,50%)"}}>About Us</h1>
      <div className="about-content">
        <p>
          Our photography studio,<span style={{color:"hsl(38,100%,50%)"}}> Namma Teakada</span>, is dedicated to capturing more than just images — we tell the emotional and vibrant stories behind every special occasion. Whether it’s the joy of a wedding, the excitement of a birthday, the professionalism of corporate events, or any personal milestone, we focus on preserving genuine moments and meaningful details that truly make your celebration unique.
        </p>
        <div className="about-section">
          <h2 style={{color:"hsl(38,100%,50%)"}}>Our Vision</h2>
          <p>
            Our vision is to creatively and authentically capture the essence of every precious moment,
            transforming fleeting experiences into timeless works of art. We strive to go beyond simply taking photographs; 
            we aim to tell compelling stories that evoke genuine emotions and preserve the unique atmosphere of your special events. 
            Our commitment is to deliver exceptional photography services that not only meet but consistently exceed our clients' highest expectations, 
            ensuring every image reflects both artistic excellence and heartfelt sincerity. By combining innovative techniques, attention to detail, 
            and a deep understanding of individual stories, we seek to create lasting memories that our clients will cherish for generations to come, 
            making each moment immortalized through our lens truly unforgettable.

          </p>
        </div>
        <div className="about-section">
          <h2 style={{color:"hsl(38,100%,50%)"}}>Our Expertise</h2>
          <ul>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Wedding Photography:</span> Documenting the rich traditions and candid joy of your special day with artistry and heartfelt storytelling.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Birthday Photography:</span> Celebrating the vibrant spirit and joyous milestones of birthdays, capturing both candid moments and special traditions to preserve lasting memories.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Puberty Photography:</span> We capture the beauty and meaning of puberty ceremonies with natural, heartfelt moments.</li>
             <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Product Photography:</span> Showcasing your products with precision and style to highlight their unique features and appeal.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Model Photoshoots:</span> Creating striking and expressive images that bring out the personality and style of each model.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Corporate Events:</span> Capturing the professionalism and dynamic moments of your business gatherings with clarity and creativity.</li>
          </ul>
        </div>
        <div className="about-section">
          <h2 style={{color:"hsl(38,100%,50%)"}}>Why Choose Us?</h2>
          <ul>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Professional and Experienced Team:</span> Our skilled photographers bring years of experience and a passion for storytelling to every project.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Creative and Unique Perspective:</span> We blend artistic vision with a natural approach to create images that stand out and resonate personally.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>State-of-the-Art Equipment:</span> Utilizing the latest technology and equipment to ensure superior image quality and creative possibilities.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Attention to Detail:</span> We meticulously capture every aspect of your event, from grand moments to subtle nuances, ensuring nothing is missed.</li>
            <li><span style={{color:"hsl(38,100%,50%)", fontWeight: "Strong"}}>Timely Delivery:</span> Committed to providing you with your stunning photos promptly, so you can enjoy and share your memories without delay.</li>
          </ul>
        </div>
      </div>
      <div className="team-members">
        <div className='team-header'>
        <h2>Meet Our Talented Team</h2>
        <p style={{color:"black"}}>Dedicated Professionals Capturing your Moments</p>
        </div>

        <div className='about-team'>
          <div className='team-member-1'>
           <img src="\assets\images\team members\Satz 111.jpg" alt="Team mate 1" />
          <h2 style={{color:"hsl(38, 100%, 50%)"}}>Sathish Kumar</h2>
          <p style={{fontWeight:"bold"}}>Founder</p>
          <p>Chief Editor & Colorist - The visionary behind our 
             studio, the Founder built Namma Teakada Studios on a
             passion for creativity and storytelling. With a deep
             commitment to quality and innovation, they lead the
             team in turning ideas into unforgettable visual 
             experiences that inspire and connect.</p>
          </div>

          <div className='team-member-2'>
            <img src="\assets\images\team members\member 1.jpg" alt="Team mate 2" />
            <h2 style={{color:"hsl(38, 100%, 50%)"}}>Karthikeyan P</h2>
            <p style={{fontWeight:"bold"}}>Administrator</p>
            <p>The backbone of our studio’s operations, our administrative 
              team ensures everything runs smoothly behind the scenes. 
              They keep the creative process organized and efficient, 
              allowing our artists to focus on what they do best.</p>
          </div>

          <div className='team-member-5'>
           <img src="\assets\images\team members\member 5.PNG" alt="Team mate 1" />
          <h2 style={{color:"hsl(38, 100%, 50%)"}}>Sathish Kumar C</h2>
          <p style={{fontWeight:"bold"}}>Administrator</p>
          <p>At the heart of our studio’s day-to-day operations, our 
            administrative team keeps everything running seamlessly. 
            They handle coordination, client communication, and organization 
            with precision, ensuring a smooth workflow so our artists can 
            focus on their creative craft.</p>
          </div>

           <div className='team-member-3'>
            <img src="\assets\images\team members\member 3.jpg" alt="Team mate 3" />
            <h2 style={{color:"hsl(38, 100%, 50%)"}}>Karthikeyan</h2>
            <p style={{fontWeight:"bold"}}>Chief Photographer & Editor</p>
            <p>The visual storyteller of our studio, bringing moments to life 
              through the perfect blend of creativity and technical skill. 
              From capturing stunning shots to crafting flawless edits, 
              they ensure every frame tells a unique and captivating story.</p>
          </div>

           <div className='team-member-4'>
            <img src="\assets\images\team members\member 4.png" alt="Team mate 4" />
            <h2 style={{color:"hsl(38, 100%, 50%)"}}>Naveen Kumar</h2>
            <p style={{fontWeight:"bold"}}>Chief Editor</p>
            <p>The perfectionist behind every final frame, our Chief Editor 
              ensures each project meets the highest creative and visual 
              standards. They refine every image and video to reflect the 
              studio’s signature style and excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;