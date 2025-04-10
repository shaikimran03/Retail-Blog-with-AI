import '../styles/landingpage.css';
import Navbar from '../components/Navbar';
import IllnOne from '../assets/images/landingpageheroone.svg';
import IllnTwo from '../assets/images/landingpageherotwo.svg';
import { MdArrowForward } from 'react-icons/md';
import { BsPostcardHeart, BsSpeedometer } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaHouseUser } from 'react-icons/fa';
import { SiGooglegemini, SiRazorpay } from 'react-icons/si';
import { GrMoney } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <>
      <div className='landingpage-navbar'>
        <Navbar />
      </div>
      <div className='landingpage-container'>
        <section className='landingpage-herosection-container'>
          <div className='ldp-herosection-image-desp-c'>
            <div className='ldp-herosection-image-c'>
              <div className='ldp-herosection-image'>
                <img src={IllnOne} alt='hero1' />
              </div>
              <div className='ldp-herosection-image'>
                <img src={IllnTwo} alt='hero1' />
              </div>
            </div>
            <div className='ldp-herosection-desp-c'>
              <div className='ldp-herosection-desp-info'>
                <h1>Create AI-powered blogs effortlessly</h1>
                <p>{`Post blogs and earn rewards. Powered by Google's gemini`}</p>
              </div>
              <div className='ldp-herosection-desp-action-btn-c'>
                <Link to='/login'>
                  Get Started <MdArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='landingpage-features-container'>
          <div className='ldp-features-c'>
            <div className='ldp-features-header'>
              <h3>features</h3>
            </div>
            <div className='ldp-features-cards-container'>
              <div className='ldp-features-card-c'>
                <div
                  className='ldp-features-card-img-c'
                  style={{ backgroundColor: 'rgb(255 231 231)' }}
                >
                  <BsPostcardHeart style={{ color: '#eb7373' }} />
                </div>
                <div className='ldp-features-card-desp-c'>
                  <p>
                    create and explore awesome blog post of different
                    categories.{' '}
                  </p>
                </div>
              </div>

              <div className='ldp-features-card-c'>
                <div
                  className='ldp-features-card-img-c'
                  style={{ backgroundColor: '#ede6ff' }}
                >
                  <FaPeopleGroup style={{ color: '#9773eb' }} />
                </div>
                <div className='ldp-features-card-desp-c'>
                  <p>Follower other blogs and be updated on new blog posts. </p>
                </div>
              </div>

              <div className='ldp-features-card-c'>
                <div
                  className='ldp-features-card-img-c'
                  style={{ backgroundColor: '#d5ffea' }}
                >
                  <FaHouseUser style={{ color: '#73ebaf' }} />
                </div>
                <div className='ldp-features-card-desp-c'>
                  <p>
                    Complete user management. Include password reset and forgot
                    password, abouts and more.{' '}
                  </p>
                </div>
              </div>

              <div className='ldp-features-card-c'>
                <div
                  className='ldp-features-card-img-c'
                  style={{ backgroundColor: '#dce4ff' }}
                >
                  <SiGooglegemini style={{ color: '#738feb' }} />
                </div>
                <div className='ldp-features-card-desp-c'>
                  <p>{`Generate Blogs using google's gemini`}</p>
                </div>
              </div>
              <div className='ldp-features-card-c'>
                <div
                  className='ldp-features-card-img-c'
                  style={{ backgroundColor: '#fdffef' }}
                >
                  <GrMoney style={{ color: '#d9eb73' }} />
                </div>
                <div className='ldp-features-card-desp-c'>
                  <p>
                    Earn rewards by posting blog, liking a post or commenting.
                  </p>
                </div>
              </div>
              <div className='ldp-features-card-c'>
                <div
                  className='ldp-features-card-img-c'
                  style={{ backgroundColor: '#e8ffe8' }}
                >
                  <BsSpeedometer style={{ color: '#77eb73' }} />
                </div>
                <div className='ldp-features-card-desp-c'>
                  <p>Redeem your earned rewards to Ai credits</p>
                </div>
              </div>
              <div className='ldp-features-card-c'>
                <div
                  className='ldp-features-card-img-c'
                  style={{ backgroundColor: '#d0d9ff' }}
                >
                  <SiRazorpay style={{ color: '#294be2' }} />
                </div>
                <div className='ldp-features-card-desp-c'>
                  <p>
                    Razorpay payment integration for seemless and hasslefree
                    payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='landingpage-about-container'>
          <div className='ldp-about-c'>
            <div className='ldp-about-header'>
              <h3>About</h3>
            </div>
            <div className='ldp-about-desp'>
              <p>
                {`
              Welcome to Imran's Blog! This blog was created by Shaik imran
              as a blog platform for user's to publish retail blogs help retail websites maintain fresh and engaging blog content.
              and share  thoughts and ideas with the world. 
              The platform features a React-based interface for easy content management and editing. 
              A Node.js backend supports saving and scheduling posts for automated publishingSahand is a passionate developer who loves to write about
              technology, coding, and everything in between.
           
              On this blog platform, you'll find weekly articles and tutorials on topics
              such as  covering product insights, shopping advice, and market trends, web development, software engineering, and programming
              languages. Imran is always learning and exploring new
              technologies, so be sure to check back often for new content!
           
              Imran's Blog is a place for everyone, whether you're a beginner
              or an experienced developer. We believe that sharing knowledge
              and experiences is the best way to learn and grow.
              Imran encourages you to leave comments, ask questions, and share
              your own experiences with the community.
            
              If you have any questions or suggestions for future articles,
              please feel free to reach out to us. You can contact us through
              the contact form on our website or by sending us an email.
              We love hearing from our readers and appreciate your feedback!
        
              Thank you for visiting Imran's Blog! We hope you find our
              content helpful and inspiring. Don't forget to subscribe to our
              newsletter to stay updated on the latest articles and tutorials.
              You can also follow us on social media to join the conversation
              and connect with other readers.
            
                `}
              </p>
              <p>{`Complete user management lets you manage your profile details, reset passwords and more. Besides creating new posts user get rewards point which later can be redeem to ai credits. User also gets rewards for liking and commenting on post.
                `}</p>
              <p>{`Purchase Ai credits with seemless payment through razorpay payment gateway.`}</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
