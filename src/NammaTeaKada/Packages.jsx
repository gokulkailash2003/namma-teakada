import './Packages.css';
import { useNavigate } from 'react-router-dom';

function Packages() {
    const navigate = useNavigate();
    const handleBookNow = (packageName) => {
        navigate('/contact', { state: { subject: packageName } });
    };
    return(
        <div className="package-outer">
            <div className="package-header">
                <h1>Our Packages</h1>
                <h3>Our photography packages are designed to help you choose what fits your needs and budget effortlessly.</h3>
            </div>
            <div className="package-list">
               <div className='pack1'>
                    <h2 style={{color:"hsla(0, 0%, 100%, 1.00)",  marginBottom:"10px", fontWeight:"bold"}}>Copper Package</h2>
                    <h2 style={{color:"hsl(38,100%,50%)", borderTop:"2px solid white", borderBottom:"2px solid white", padding:"5px"}}>₹ 29,999 <span style={{fontSize:"14px"}}>/session</span> <br /><span style={{fontSize:"12px", marginLeft:"180px", marginTop:"5px", display:"inline-block"}}>*GST applicable as per norms</span></h2>
                    {/* ...existing code... */}
                    <ul style={{listStyle: "none", lineHeight: "40px", color:"white"}}>
                        <li>Traditional Photography</li>
                        <li>Traditional Videography</li>
                        <li>30 Sheets Album - 1</li>
                        <li>Traditional Video - Full HD</li><br />
                        <li style={{fontWeight:"bold", fontSize:"20px", marginTop:"133px", color:"hsl(38,100%,50%)"}}>Compliments</li><br />
                        <li>Photo Frame (12x8) - 1</li>
                        <li>Mini Album - 1</li>
                        <li>Album Bag - 1</li>
                        <li>Calendar - 1</li>
                    </ul>
                    {/* ...existing code... */}
                    <button onClick={() => handleBookNow('Copper Package')}>Book Now</button>
               </div>
               <div className='pack2'>
                    <h2 style={{color:"hsla(0, 0%, 100%, 1.00)", marginBottom:"10px", fontWeight:"bold"}}>Silver Package</h2>
                    <h2 style={{color:"hsl(38,100%,50%)", borderTop:"2px solid white", borderBottom:"2px solid white", padding:"5px"}}>₹ 59,999 <span style={{fontSize:"14px"}}>/session</span><br /><span style={{fontSize:"12px", marginLeft:"180px", marginTop:"5px", display:"inline-block"}}>*GST applicable as per norms</span></h2>
                    {/* ...existing code... */}
                    <ul style={{listStyle: "none", lineHeight: "40px", color:"white" }}>
                        <li>Traditional Photography</li>
                        <li>Traditional Videography</li>
                        <li>Candid photography</li>
                        <li>40 Sheets Album - 1</li>
                        <li>Traditional Video - Full HD</li><br />
                        <li style={{fontWeight:"bold", fontSize:"20px", marginTop:"85px", color:"hsl(38,100%,50%)"}}>Compliments</li><br />
                        <li>Pre or Post Wedding Shoot</li>
                        <li>Photo Frame (12x8) - 1</li>
                        <li>Video Invitation - 1</li>
                        <li>Mini Album - 1</li>
                        <li>Album Bag - 1</li>
                        <li>Calendar - 1</li>
                    </ul>
                    {/* ...existing code... */}
                    <button onClick={() => handleBookNow('Silver Package')}>Book Now</button>
               </div>
               <div className='pack3'>
                    <h2 style={{color:"hsla(0, 0%, 100%, 1.00)", marginBottom:"10px", fontWeight:"bold"}}>Gold Package</h2>
                    <h2 style={{color:"hsl(38,100%,50%)", borderTop:"2px solid white", borderBottom:"2px solid white", padding:"5px"}}>₹ 89,999 <span style={{fontSize:"14px"}}>/session</span><br /><span style={{fontSize:"12px", marginLeft:"180px", marginTop:"5px", display:"inline-block"}}>*GST applicable as per norms</span></h2>
                    {/* ...existing code... */}
                    <ul style={{listStyle: "none", lineHeight: "40px", color:"white" }}>
                        <li>Traditional Photography</li>
                        <li>Traditional Videography</li>
                        <li>Candid photography</li>
                        <li>Candid Videography</li>
                        <li>50 Sheets Album - 1</li>
                        <li>Traditional Video - Full HD</li>
                        <li>Candid Highlight - upto 5mins</li>
                        <li ></li><br />
                        <li style={{fontWeight:"bold", fontSize:"20px", color:"hsl(38,100%,50%)"}}>Compliments</li><br />
                        <li>Event Reels - 1</li>
                        <li>Pre or Post Wedding Shoot</li>
                        <li>Photo Frame (12x8) - 1</li>
                        <li>Video Invitation - 1</li>
                        <li>Mini Album - 1</li>
                        <li>Album Bag - 1</li>
                        <li>Calendar - 1</li>
                    </ul>
                    {/* ...existing code... */}
                    <button onClick={() => handleBookNow('Gold Package')}>Book Now</button>
               </div>
            </div>
        </div>
    );
}

export default Packages;
