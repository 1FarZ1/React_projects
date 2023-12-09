import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import MainImage from './mainImage';
import Logo from './Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='page container'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          
          <Link to='/register' className='btn btn-hero'>
            get started
            </Link>
          <MainImage/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;