import React, { useState } from 'react';
import '../FAQ/FAQ.css';

function FAQ() {
  
  return (
    <div className='my-4'>
      <div className='FAQ-ContentBox row mx-auto'>
        <div className='FAQ-Container1 col-md-4'>
            <h1 className='FAQ-heading'>FAQs</h1>
            <button className='Contact-Btn'>Contact Us</button>
        </div>
        <div className='FAQ-Container2 row col-md-7'>
        {/* <div className='Question'>
        <p class="d-flex justify-content-between gap-1">
          <div className='fw-semibold fs-5' >What subjects do you offer tutoring for?</div>
           <button className="Add-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg>          </button>
          </p>
          <div className="collapse" id="collapseExample">
         <div className="card card-body">
             <div className='Question'>
            <div>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div> 
        </div>
          </div>
         </div>
        </div> */}

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
             <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <div className='Ques'>What subjects do you offer tutoring for?</div> 
             </button>
              </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
             <div className='Answer'>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div>
        </div>
       </div>
      </div>
      <div class="accordion-item">
             <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <div className='Ques'>What subjects do you offer tutoring for?</div> 
             </button>
              </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
             <div className='Answer'>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div>
        </div>
       </div>
      </div>
      <div class="accordion-item">
             <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <div className='Ques'>What is included in LurniGo's test preparation coaching?</div> 
             </button>
              </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
             <div className='Answer'>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div>
        </div>
       </div>
      </div>
      <div class="accordion-item">
             <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              <div className='Ques'>What subjects do you offer tutoring for?</div> 
             </button>
              </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
             <div className='Answer'>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div>
        </div>
       </div>
      </div>
      <div class="accordion-item">
             <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              <div className='Ques'>What is included in LurniGo's test preparation coaching?</div> 
             </button>
              </h2>
        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
             <div className='Answer'>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div>
        </div>
       </div>
      </div>
         <div class="accordion-item">
            <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              <div className='Ques'>What subjects do you offer tutoring for?</div> 
             </button>
           </h2>
             <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
             <div className='Answer'>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div>
           </div>
         </div>
          </div>
         <div class="accordion-item">
        <h2 class="accordion-header">
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
          <div className='Ques'>What is included in LurniGo's test preparation coaching?</div> 
           </button>
          </h2>
           <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">
               <div className='Answer'>LurniGo combines elite tutor recruitment (top 1% industry professionals) with personalized, one-on-one live sessions, specializing in comprehensive academic and test prep services.</div>
            </div>
         </div>
        </div>
      </div>


        </div>
        
      </div>
    </div>
  )
}

export default FAQ
