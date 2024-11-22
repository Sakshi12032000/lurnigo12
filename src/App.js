
import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';




import image_1 from '../src/asset/image.jpg';
import image_2 from '../src/asset/image.png';
import image_3 from '../src/asset/image-2.png';
import image_4 from '../src/asset/image-3.png';
import image_5 from '../src/asset/image-4.png';
import slide_1 from '../src/asset/slide-1.png';
import slide_2 from '../src/asset/slide-2.png'
import { useEffect, useState } from 'react';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(()=>{
    if(selectedIndex===-1){
      setSelectedIndex(areaOfWorkData?.length-1)
    }
    else if(selectedIndex===areaOfWorkData?.length){
      setSelectedIndex(0)
    }
  },[selectedIndex])
  const areaOfWorkData = [
    {
      title: "Udaan",
      imgPath: image_4,
      desc: "Educate a Girl, Empower a Nation",
    },
    {
      title: "Shiksha na Ruke",
      imgPath: image_3,
      desc: "A Girl with a Book is a Vaccine Against Poverty",
    },
    {
      title: "Tayyari Kal Ki",
      imgPath: image_5,
      desc: "Enabling Livelihoods for Girls through Skill Training",
    }

  ];

  return (
    <div className='areaofwork'>
      <div>
        <div className='title'>Area of Work</div>
        <div className='heads'>The Most frequently searched and most popular apartment of the application will be in the list</div>
      </div>


      <div className='main'>
        <div className='container'>
          <div className='left'>
            <img src={image_1} alt='' className='weighimage' />
          </div>

          <div className='right'>
            <img src={image_2} alt='' />
            <h2>Nanhi Kali</h2>
            <p>Making Primary Healthcare Accessible for All Girls</p>
          </div>
        </div>


        <div className='c-container'>
          <div className='para'>Home/Nanhi kali</div>
        </div>

        <ul>
          <li> Visitors <p>45,000</p> </li>
          <li> Donors <p>45,000</p></li>
          <li> Volunters <p>45,000</p> </li>
        </ul>
      </div>



      <div>
        <div className='end-container'>
          <div class="row">
            <div class="col-8">
              <div className='head'>NANHI KALI</div>
              <div className='headin'>Enabling 'Kal Ka Classroom' To Nurture Future-Ready Girls</div>
              <p>
                Nanhi Kali is an initiative dedicated to empowering rural girls by bridging the educational divide between urban and rural areas. The program envisions a future where every girl has access to top-tier technical education, equipping them with the skills needed to thrive in a rapidly advancing world. Central to this vision is 'Kal ka Classroom,' a cutting-edge digital computer lab designed to provide an exceptional learning experience.
              </p>
              <p>
                Housed in a fully furnished, air-conditioned building, 'Kal ka Classroom' boasts 40 high-performance computer sets, a state-of-the-art projector, pen tablets, and high-speed internet. This advanced setup ensures that students receive the same level of technological immersion and education as their urban counterparts. By leveraging these resources, Nanhi Kali aims to empower rural girls to contribute significantly to national development and achieve their full potential.
              </p>


            </div>

            <div class="col-4">
              <div className='swiper-container'>
                <div className='swiper-wrapper'>


                  {areaOfWorkData ? <div className='swiper-slide'>
                    <div className='card-container'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <p>Area Of Work</p>
                        <div className='me-2'>
                          <button className='btn fs-1 border-white text-warning' onClick={() => setSelectedIndex(selectedIndex - 1)}>&#8249;</button>
                          <button className='btn ms-1 fs-1 border-white text-warning' onClick={() => setSelectedIndex(selectedIndex + 1)}>&#8250;</button>
                        </div>
                      </div>
                      <span className='subheading ms-3 py-2'>{areaOfWorkData[selectedIndex]?.title}</span>
                      <span className='mx-3'>
                        <img src={areaOfWorkData[selectedIndex]?.imgPath} alt={areaOfWorkData[selectedIndex]?.title} className='w-100' />
                      </span>
                      <span className='desc ms-3 py-pr-3 pt-2'>{areaOfWorkData[selectedIndex]?.desc}</span>
                      <button className='bttn ms-3 mt-1'>Read More</button>

                    </div>
                  </div> : null}

                </div>

                <div className='pagination'></div>

                <div className='swiper-button-prev'></div>

                <div className='swiper-button-next'></div>

              </div>
            </div>





          </div>
        </div>
      </div>



    </div >
  );
}

export default App;
