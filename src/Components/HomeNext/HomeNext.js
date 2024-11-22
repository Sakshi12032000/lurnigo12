import React from 'react';
import '../HomeNext/HomeNext.css';
import Group_Icon1 from '../../Assets/Group-Icon1.png';
import Group_Icon2 from '../../Assets/Group-Icon2.png';
import Group_Icon3 from '../../Assets/Group-Icon3.png';
import Group_Icon4 from '../../Assets/Group-Icon4.png';


function HomeNext() {
  return (
    <div className='HN-Content'>
      <div className=''>
      <div className='Home-Bottom-Box row mx-auto'>
        <li className='Group-1 col-3'> 
            <img className='group-img1' src={Group_Icon1} alt='' />
            <div className='group-content'>
              <span>10000+</span><br/>
              <span>Happy Students</span>
              </div> 
        </li>
        <li className='Group-1 col-3'> 
            <img className='group-img1' src={Group_Icon2} alt='' />
            <div className='group-content'>
              <span>30+</span><br/>
              <span>Countries available</span>
              </div>
        </li>
        <li className='Group-1 col-3'> 
            <img className='group-img1' src={Group_Icon3} alt='' /> 
            <div className='group-content'>
              <span>30000+</span><br/>
              <span>Countries available</span>
              </div>
        </li>
        <li className='Group-1 col-3'> 
            <img className='group-img1' src={Group_Icon4} alt='' />
            <div className='group-content'>
              <span>1500+</span><br/>
              <span>Elite Tutors</span>
              </div>
        </li>
      </div>
      </div>
    </div>
  )
}

export default HomeNext
