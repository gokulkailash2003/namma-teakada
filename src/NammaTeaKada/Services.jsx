import './Services.css';

const serviceOptions = [
  "Wedding events",
      "Haldi ceremony",
      "Mehandi ceremony",
      "Sangeet ceremony",
  "Birthday events",
  "Puberty events",
  "Corporate events",
  "Baby Photoshoot",
  "Model photoshoot",
  "Product photoshoot",
  "Ad Shoot",
  "Advertisement"
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-dropdown">
        <label htmlFor="services-list" className="dropdown-label">Choose a Service:</label>
        <select id="services-list" className="dropdown-select">
          {serviceOptions.map((service, idx) => (
            <option key={idx} value={service}>{service}</option>
          ))}
        </select>
      </div>
    </section>
  );
}


export default Services;