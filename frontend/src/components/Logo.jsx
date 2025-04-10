// Logo.jsx
// This component is used to display the logo of the blog.
// It uses the Font Awesome icon library to display a blog icon.
// The logo consists of an icon and a text.
// The icon is imported from the react-icons library.
// The text is a simple string.
import { FaBlog } from "react-icons/fa6";
import '../styles/logo.css';
const Logo = () => {
  return (
    <div className='logo-c'>
    
      <FaBlog />
      
      <p>Imran's Blog</p>
    </div>
  );
};

export default Logo;
