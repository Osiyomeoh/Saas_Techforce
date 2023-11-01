import React from 'react';

function Pricing() {
    return (
        <section id="pricing">
            <h2>Choose Your Plan</h2>
            <div className="pricing-grid">
                {/* Basic Plan */}
                <div className="pricing-item">
                    <h3>Basic</h3>
                    <p>$19/mo</p>
                    <ul>
                        <li>Seamless Integration</li>
                        <li>User-Friendly Dashboard</li>
                        <li>Robust Security</li>
                    </ul>
                    <button ><a href="#contact">Choose Plan</a></button>
                </div>

                {/* Pro Plan */}
                <div className="pricing-item">
                    <h3>Pro</h3>
                    <p>$49/mo</p>
                    <ul>
                        <li>Seamless Integration</li>
                        <li>User-Friendly Dashboard</li>
                        <li>Robust Security</li>
                        <li>Advanced Analytics</li>
                        <li>Cross-Platform Support</li>
                    </ul>
                    <button ><a href="#contact">Choose Plan</a></button>
                </div>

                {/* Premium Plan */}
                <div className="pricing-item">
                    <h3>Premium</h3>
                    <p>$99/mo</p>
                    <ul>
                        <li>Seamless Integration</li>
                        <li>User-Friendly Dashboard</li>
                        <li>Robust Security</li>
                        <li>Advanced Analytics</li>
                        <li>Cross-Platform Support</li>
                        <li>24/7 Customer Support</li>
                    </ul>
                    <button ><a href="#contact">Choose Plan</a></button>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
