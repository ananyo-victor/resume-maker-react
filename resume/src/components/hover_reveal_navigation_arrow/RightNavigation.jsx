import React, {useContext} from 'react';
import { UserContext } from '../../UserContext';
import { useLocation, Link } from 'react-router-dom';

function RightNavigation({ formRef }) {
  const { button } = useContext(UserContext);
  const location = useLocation();
  let des;
  if (location.pathname === '/basic-details') {
    des = '/work-experience';
  } else if (location.pathname === '/work-experience') {
    des = '/education';
  } else if (location.pathname === '/education') {
    des = '/skills';
  } else if (location.pathname === '/skills') {
    des = '/summary';
  } else if (location.pathname === '/summary') {
    des = '/achievement';
  } else if (location.pathname === '/achievement') {
    des = '/review';
  }
  const handleNextClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })); // Trigger the form submit event
    }
  };

  return (
    <div>
      <div className='absolute z-30 right-0 h-screen w-fit flex justify-center items-center px-3 opacity-50 hover:opacity-100 hover:from-white bg-gradient-to-l from-blue-300 to-white'>
        <button className='size-fit p-3 text-2xl font-semibold drop-shadow-2xl shadow-2xl rounded-xl bg-white hover:bg-blue-700 hover:text-white' disabled={location.pathname === '/review' && button} type='submit' onClick={handleNextClick}><Link to={des}>Next</Link></button>
      </div>
    </div>
  )
}

export default RightNavigation
