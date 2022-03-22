import { useRef } from 'react';
import './about.css';
const AboutUs = (props)=> {
    const aboutSection = useRef(null);
    return (
       <div className="container">
           
      <div className="wrapper">
          <div className="hr">
          <h2>Our Mission</h2>
              </div>
              <p className="mission-txt">To Provide Quality Education at Low Cost"</p>
      </div>

      <div className="wrapper">
      <h2>About</h2>
      <div>
      <p>Learn & Grow is an initiative to help the upcoming tech enthusiasts with the latest tech courses. We focuses on providing the most efficient courses. We will help programmers build up concepts in different technologies that include Javascript, React JS, Angular JS, HTML, CSS, Node JS.</p>

      </div>
    </div>
    <div ref= {aboutSection} className="wrapper">
      <h2>Contact Us</h2>
      <div>
      <p>Email: support.learn&grow@gmail.com</p>
      <p>Mobile: +918559843547</p>

      </div>
    </div>


     

    </div>

      

    )
}
export default AboutUs;