import React, {useContext} from 'react'
import { UserContext } from '../../UserContext'
import { useLocation, Link } from 'react-router-dom'

function LeftNavigation({ formRef }) {
  const location = useLocation();
  const { button } = useContext(UserContext);
  let des;
  if (location.pathname === '/work-experience') {
    des = '/basic-details'
  }else if(location.pathname === '/education'){
    des = '/work-experience'
  }else if(location.pathname === '/skills'){
    des = '/education';
  }else if(location.pathname === '/summary'){
    des = '/skills';
  }else if(location.pathname === '/achievement'){
    des = '/summary';
  }else if(location.pathname === '/review'){
    des = '/achievement';
  }
  const handlePrevClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })); // Trigger the form submit event
    }
  };
  return (
    <>
      <div className='absolute z-30 h-screen w-fit flex justify-center items-center px-3 opacity-50 hover:opacity-100 hover:from-white bg-gradient-to-r from-gray-300 via-sky-50 to-white '>
        <button className='size-fit p-3 text-2xl font-semibold drop-shadow-2xl shadow-2xl rounded-xl bg-white hover:bg-blue-600 hover:text-white' disabled={location.pathname === '/basic-details' && button} type='submit' onClick={handlePrevClick}><Link to={des}>Prev</Link></button>
      </div>
    </>
  )
}

export default LeftNavigation
