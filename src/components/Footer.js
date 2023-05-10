import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <div className='container'>
        <div>
          <div className='footer-title'>
            <h1>Components</h1>
          </div>
          <div className='flex'>
            <div className='column quick-links'>
              <h2>Quick Links</h2>
              <nav>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Services</li>
                  <li>Our Team</li>
                </ul>
              </nav>
            </div>
            <div className='column follow-us'>
              <h2>Follow Us</h2>
              <nav>
                <ul>
                  <li><FontAwesomeIcon icon={faFacebookSquare} size='3x' className='icon' /></li>
                  <li><FontAwesomeIcon icon={faInstagramSquare} size='3x' className='icon' /></li>
                  <li><FontAwesomeIcon icon={faTwitterSquare} size='3x' className='icon' /></li>
                </ul>
              </nav>
            </div>
            <div className='column contact-info'>
              <h2>Contact Info</h2>
              <nav>
                <ul>
                  <li><FontAwesomeIcon icon={faLocationDot} className='icon' />555 River Av, Winnipeg</li>
                  <li><FontAwesomeIcon icon={faEnvelope} className='icon' />components@email.com</li>
                  <li><FontAwesomeIcon icon={faPhone} className='icon' />(123) 456 7890</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer