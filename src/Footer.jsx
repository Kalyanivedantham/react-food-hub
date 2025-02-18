import React from "react";
import "./Footer.css"; // Import the CSS file

function Footer() {
    return (
    
        <footer className="footer">
            <br /> <br />
            <div className="footer-container">
                {/* Brand and About Section */}
                <div className="footer-section">
                    <h2 className="footer-title">TastyBites</h2>
                    <p className="footer-text">Serving delicious food with love. Order now and enjoy the best flavors.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3 className="footer-subtitle">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact, Social Media & Copyright */}
                <div className="footer-section footer-flex">
                    {/* Contact Section */}
                    <div className="footer-contact">
                        <h3 className="footer-subtitle">Contact Us</h3>
                        <p>📍 123 Food Street, Food City</p>
                        <p>📞 +123 456 7890</p>
                        <p>✉️ support@tastybites.com</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-social">
                        <h3 className="footer-subtitles">Follow Us</h3>
                        <div className="social-links">
                            <a href="#">🌐 Facebook</a>
                            <a href="#">📷 Instagram</a>
                            <a href="#">🐦 Twitter</a>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="footer-copyright">
                        <p>&copy; 2025 TastyBites. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
