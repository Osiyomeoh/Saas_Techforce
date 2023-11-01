import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let isError = false;
    
    for (const key in formData) {
      if (formData[key].trim() === '') {
        setFormError(error => ({
          ...error,
          [key]: true
        }));
        isError = true;
      }
    }
  
    if (!isError) {
      // Simulating saving to a temp JSON file by using localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
      
      // Issue an alert
      alert('Form submitted successfully!');
      console.log(JSON.parse(localStorage.getItem('formData')));

    }
  };
  

  return (
    <section id="contact" style={{ backgroundColor: '#f0f4f8' }}>
    <h2>Contact Us</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      
      {/* Contact Us Image Section */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <img 
          src="https://unsplash.com/photos/q10VITrVYUM/download?force=true&w=400" 
          alt="Contact Us Theme"
          style={{ maxWidth: '100%', borderRadius: '5px' }}
        />
      </div>

        {/* Contact Form Section */}
        <div style={{ flex: 1 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              style={{ padding: '10px', borderColor: formError.name ? 'red' : '#007BFF' }}
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              style={{ padding: '10px', borderColor: formError.email ? 'red' : '#007BFF' }}
            />
            <textarea 
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              style={{ padding: '10px', borderColor: formError.message ? 'red' : '#007BFF' }}
            ></textarea>
            <button 
              type="submit"
              style={{
                padding: '10px 15px',
                backgroundColor: 'transparent',
                color: '#007BFF',
                border: '2px solid #007BFF',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                transition: 'background-color 0.3s, color 0.3s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#007BFF';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#007BFF';
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = '#007BFF';
                e.target.style.color = 'white';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#007BFF';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
     
    </section>
  );
}

export default ContactForm;
