import React from 'react';
import '../Navbar/Navbar.css';
import Lurnigo_logo from '../../Assets/LurniGo-Logo.png';

function Navbar() {
  return (
    <div className='Content'>
      <div className='Content-Box'>
        <div className='Logo'>
            <img className='logo' src={Lurnigo_logo} alt='lunrigo'/>
        </div>
        <div className='Listing-list'>
        {/* <ul className=''> */}
        <li className=''>Academics</li>
        <li className=''>Test Prep</li>
        <li className=''>College Consulting</li>
        <li className=''>Alumuni Network</li>
        <li className=''>Tutor Network</li>
        {/* </ul> */}
        </div>

        <div className='Menu-Bar'>
            
            <button class="btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                   </svg>                  
                   </button>
 
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                 <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div className="offcanvas-body">
                 <div className='Menu-List'>
                 <li className=''>Academics</li>
                 <li className=''>Test Prep</li>
                 <li className=''>College Consulting</li>
                 <li className=''>Alumuni Network</li>
                 <li className=''>Tutor Network</li>
                 </div>
               </div>
               </div>
            </div>
      </div>   
    </div>
  )
}

export default Navbar
