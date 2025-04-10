import '../styles/footer.css';
import { SlGlobe } from 'react-icons/sl';
import {
  FaBehance,
  FaCodepen,
  FaGithub,
  FaJoint,
  FaNodeJs,
  FaPen,
  FaReact,
  FaTwitter,
} from 'react-icons/fa';
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import {
  SiAxios,
  SiCloudinary,
  SiExpress,
  SiGooglegemini,
  SiMongodb,
  SiRazorpay,
  SiReactrouter,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer>
      <div className='svg-c'>
        <SlGlobe />
        <SlGlobe />
      </div>
      <div className='footer-container'>
        <div className='footer-logo-credits'>
          <div className='footer-logo-c'>
            <SlGlobe />
            <SlGlobe />
            <p>Imran's Blog</p>
          </div>
          <div className='footer-credits-c'>
            <p>© 2025</p>
            <div>
              <Link to='https://github.com/shaikimran03' target='_blank'>
                <FaGithub />
                Shaik Imran
              </Link>
            </div>
          </div>
        </div>

        <div className='footer-links'>
          <div className='footer-link-c'>
            <span>pages</span>
            {!user && (
              <>
                {' '}
                <p>
                  <Link to='/login'>login</Link>
                </p>
                <p>
                  <Link to='/register'>sign up</Link>
                </p>
              </>
            )}
            {user && (
              <>
                {' '}
                <p>
                  <Link to='/home'>home</Link>
                </p>
                <p>
                  <Link to='/profile'>profile</Link>
                </p>
              </>
            )}
          </div>
          <div className='footer-link-c'>
            <span>social</span>
            <p>
              <Link to='https://github.com/shaikimran03' target='_blank'>
                <FaGithub />
                github
              </Link>
            </p>
            
            <p>
              <Link to='mailto:21x31a6925@gmail.com' target='_blank'>
                <MdOutlineMail /> mail
              </Link>
            </p>
          </div>

          <div className='footer-link-c'>
            <span>tech stack</span>
            <p>
              <Link to='https://react.dev/' target='_blank'>
                <FaReact /> react
              </Link>
            </p>
            <p>
              <Link to='https://expressjs.com/' target='_blank'>
                <SiExpress /> express
              </Link>
            </p>
            <p>
              <Link to='https://www.mongodb.com/' target='_blank'>
                <SiMongodb /> mongodb
              </Link>
            </p>
            <p>
              <Link to='https://nodejs.org/en' target='_blank'>
                <FaNodeJs /> nodejs
              </Link>
            </p>
            
            <p>
              <Link to='https://axios-http.com/' target='_blank'>
                <SiAxios /> axios
              </Link>
            </p>
            <p>
              <Link to='https://joi.dev/' target='_blank'>
                <FaJoint /> joi
              </Link>
            </p>
            <p>
              <Link to='https://reactrouter.com/' target='_blank'>
                <SiReactrouter /> react router
              </Link>
            </p>
              
          </div>
        </div>
        <div className='footer-banner'>
          <p>
            Developed by <FaGithub />{' '}
            <Link to='https://github.com/shaikimran03' target='_blank'>
              Shaik Imran
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
