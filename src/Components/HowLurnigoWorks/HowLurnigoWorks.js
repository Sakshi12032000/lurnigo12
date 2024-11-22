import React from 'react';
import '../HowLurnigoWorks/HowLurnigoWorks.css';
import img_1 from '../../Assets/IMG-1.png';
import img_2 from '../../Assets/IMG-2.png';
import img_3 from '../../Assets/IMG-3.png';

function HowLurnigoWorks() {
  return (
    <div className='mb-5'>
      <div className='HowLurnigoWorks-ContentBox'>
        <h3 className=' m-2'>How Lurnigo works</h3>
        <div className='HowLurnigoWorks-subHeading'>Begin your learning journey with a Lurnigo tutor in just three easy steps.</div>
        <div className='HowLurnigoWorks-Container row'>
            <div className='HowLurnigoWorks-Card'>
                <div className='Card-Container'>
                <div className=' Card-img'>
                    <img className='img-cardImg' src={img_1} alt='' />
                </div>
                <div className='Card-heading'>TELL US YOUR NEED</div>
                <div className='Card-content'>Whether you're new to a subject, finding it challenging, falling behind in class, or aiming to excel in your exams, let us know how we can assist you!</div>
                </div>
            </div>
            <div className='HowLurnigoWorks-Card'>
            <div className='Card-Container'>
                <div className=' Card-img'>
                    <img className='img-cardImg' src={img_2} alt='' />
                </div>
                <div className='Card-heading'>BOOK A FREE TRIAL</div>
                <div className='Card-content'>We'll connect you with the perfect tutor and arrange your first free trial lesson. With our Perfect Match Guarantee, you can trust you'll find the right fit for your needs.</div>
                </div>
            </div>
            <div className='HowLurnigoWorks-Card'> 
            <div className='Card-Container'>
                <div className=' Card-img'>
                    <img className='img-cardImg' src={img_3} alt='' />
                </div>
                <div className='Card-heading'>SIGN UP FOR LESSONS</div>
                <div className='Card-content'>We'll connect you with the perfect tutor and arrange your first free trial lesson. With our Perfect Match Guarantee, you can trust you'll find the right fit for your needs.</div>
                </div>
            </div>
            <div className='HowLurnigoWorks-Card'>
            <div className='Card-Container'>
                <div className=' Card-img'>
                    <img className='img-cardImg' src={img_2} alt='' />
                </div>
                <div className='Card-heading'>TELL US YOUR NEED</div>
                <div className='Card-content'>We'll connect you with the perfect tutor and arrange your first free trial lesson. With our Perfect Match Guarantee, you can trust you'll find the right fit for your needs.</div>
            </div>
            </div>
            <div className='HowLurnigoWorks-Card'>
            <div className='Card-Container'>
                <div className=' Card-img'>
                    <img className='img-cardImg' src={img_1} alt='' />
                </div>
                <div className='Card-heading'>TELL US YOUR NEED</div>
                <div className='Card-content'>Whether you're new to a subject, finding it challenging, falling behind in class, or aiming to excel in your exams, let us know how we can assist you!</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HowLurnigoWorks
