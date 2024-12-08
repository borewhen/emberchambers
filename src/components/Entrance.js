import React from 'react';
import { useNavigate } from 'react-router-dom';

function Entrance() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    document.documentElement.style.transition = 'background-color 0.5s ease';
    document.body.style.transition = 'background-color 0.5s ease';
    
    requestAnimationFrame(() => {
      document.documentElement.classList.add('color-transition');
      document.body.classList.add('color-transition');
      document.querySelector('.container').classList.add('color-transition');
    });
    
    setTimeout(() => {
      navigate('/anteroom');
    }, 500);
  };

  return (
    <div className="container">
      <div className="entrance" onClick={handleClick} style={{display: 'flex', flexDirection: 'column'}}>
        <h1 style={{'color': '#ec6200', 'marginLeft': '10px', 'marginTop': '40vh', 'alignSelf': 'flex-end', 'lineHeight': '0.8'}}>ember chambers</h1>
      </div>
    </div>
  );
}

export default Entrance; 