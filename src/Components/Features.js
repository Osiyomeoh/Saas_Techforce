import React from 'react';

function Features() {
  return (
    <section id="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src="https://source.unsplash.com/random/200x200?cloud-computing" alt="Feature 1" />
          <p><strong>Cloud Integration:</strong> Seamlessly integrate with popular cloud providers, ensuring scalability and reliability for your application.</p>
        </div>
        <div className="feature-item">
          <img src="https://source.unsplash.com/random/200x200?user-interface" alt="Feature 2" />
          <p><strong>User-Friendly Dashboard:</strong> A modern, intuitive dashboard that allows users to navigate and manage tasks effortlessly.</p>
        </div>
        <div className="feature-item">
          <img src="https://source.unsplash.com/random/200x200?data-analytics" alt="Feature 3" />
          <p><strong>Advanced Analytics:</strong> Get insights into your user behavior and application performance with detailed analytics.</p>
        </div>
        <div className="feature-item">
          <img src="https://source.unsplash.com/random/200x200?cybersecurity" alt="Feature 4" />
          <p><strong>Robust Security:</strong> Protect your data with top-tier security measures, including end-to-end encryption and multi-factor authentication.</p>
        </div>
        <div className="feature-item">
          <img src="https://source.unsplash.com/random/200x200?integration" alt="Feature 5" />
          <p><strong>Third-party Integrations:</strong> Connect and synchronize with your favorite tools and platforms for maximum efficiency.</p>
        </div>
        <div className="feature-item">
          <img src="https://source.unsplash.com/random/200x200?customer-support" alt="Feature 6" />
          <p><strong>24/7 Customer Support:</strong> Our dedicated team is always ready to help, ensuring you get the best out of our service.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
