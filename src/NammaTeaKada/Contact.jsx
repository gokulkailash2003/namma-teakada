import './Contact.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Contact(){
    const location = useLocation();
    const subject = location.state?.subject || '';

    const [service, setService] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [packageValue, setPackageValue] = useState(subject);
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // 'success' or 'error'
    const [showMessage, setShowMessage] = useState(false);

    // Reset form on mount and when location changes
    useEffect(() => {
      setService("");
      setName("");
      setEmail("");
      setPhone("");
      setPackageValue(location.state?.subject || "");
      setQuery("");
    }, [location.key]);

    function handleServiceChange(event){
        setService(event.target.value);
    }

    function showAnimatedMessage(msg, type, emoji) {
        setMessage({ text: msg, emoji });
        setMessageType(type);
        setPhone("");
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          // Reset form after message closes
          setService("");
          setName("");
          setEmail("");
          setPhone("");
          setPackageValue("");
          setQuery("");
        }, 3500); // Show for 3.5s
    }

    function handleSubmit(e){
        e.preventDefault();

        if(!service && packageValue.trim() === ''){
          showAnimatedMessage('Please select a service or enter package details!', 'error', '😢');
          return;
        }

        if(!name || !email || !phone ){
          showAnimatedMessage('Please fill all required fields', 'error', '😢');
          return;
        }

        // Phone number validation (10 digits only)
        if (!/^[0-9]{10}$/.test(phone)) {
          showAnimatedMessage('Please enter a valid 10-digit phone number', 'error', '😢');
          return;
        }

        fetch('https://namma-teakada2.onrender.com/send-mail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            service,
            package: packageValue,
            query
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            showAnimatedMessage('Booking form submitted successfully. We will contact you soon!', 'success', '✔️');
          } else {
            showAnimatedMessage('Failed to send booking. Please try again.', 'error', '😢');
          }
        })
        .catch((error) => {
          showAnimatedMessage('Failed to send booking. Please try again.', 'error', '😢');
          console.error('Backend Error:', error);
        });
    }

    return (
    <section className="contact">
      <h2 style={{color:"hsl(38,100%,50%)"}}>Contact Us</h2>
      
      {!showMessage && (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name*" required value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="email" placeholder="Your Email*" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="tel" pattern='[0-9]{10}' placeholder="Your Phone Number*" required value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <div className='service-selection'>
              <select value={service} onChange={handleServiceChange} required>
                  <option value="">Select a Service*</option>
                  <option value="Wedding Photoshoot">Wedding Photoshoot</option>
                  <option value="Birthday Photoshoot">Birthday Photoshoot</option>
                  <option value="Puberty Photoshoot">Puberty Photoshoot</option>
                  <option value="Corporate Events">Corporate Events</option> 
                  <option value="Baby Photoshoot">Baby Photoshoot</option> 
                  <option value="Model Photoshoot">Model Photoshoot</option> 
                  <option value="Product Photoshoot">Product Photoshoot</option> 
                  <option value="Ad Shoot">Ad Shoot</option> 
                  <option value="Advertisement">Advertisement</option> 
              </select>
              {/* <p>{service}</p> */}
          </div>
          <textarea style={{fontWeight:"bold"}} placeholder="Your Package*" required value={packageValue} onChange={(e)=>setPackageValue(e.target.value)} />
          <textarea placeholder="Your Queries" value={query} onChange={(e)=>setQuery(e.target.value)} />
          <button type="submit">BOOK NOW</button>
        </form>
      )}
        <div className="contact-info">
          <p>
            <strong style={{color:"hsl(38,100%,50%)"}}>Address:</strong> #1, Virugambakkam, Chennai, TN - 600 0092
          </p>
          <p>
            <strong style={{color:"hsl(38,100%,50%)"}}>Phone:</strong> +91-86108 98272 
            
          </p>
          <p>
            <strong style={{color:"hsl(38,100%,50%)"}}>Email:</strong> <a href="mailto:nammateakada2k17@gmail.com">nammateakada2k17@gmail.com</a>
          </p>
      </div>
      
      {showMessage && (
        <div className="contact-message-overlay">
          <div className={`contact-message ${messageType} fade-in`} style={{background:"hsla(0, 0%, 0%, 1.00)", fontFamily:'Oswald, sans-serif'}}>
            {messageType === 'success' ? (
              <span className="emoji" style={{fontSize:'2.5rem', marginRight:'10px', color:'#fff'}}>{message.emoji}</span>
            ) : (
              <span className="emoji" style={{fontSize:'2.5rem', marginRight:'10px'}}>{message.emoji}</span>
            )}
            <span style={{fontSize:'1.3rem'}}>{message.text}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
