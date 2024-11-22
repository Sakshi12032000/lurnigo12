import React from 'react';
import '../Home/Home.css';

function Home() {
  return (
    <div className='Content'>
      <div className='Home-Content-Box'>
        <div className='Container'>
        <div className='First-Container'>
        <span>Learn from expert online</span>
        <span className='blue-text' style={{color: "#0A4199"}}>tutors in United States</span>
        </div>
        <div className='Second-Container'>
            <div>
            Get help from top verified tutors for Math, Science, Coding and any other subject of your choice. Affordable online tutoring for school students, college goers, and working professionals starting at only $28/hr
            </div>
        </div>
        <div className='Third-Container'>
            <button className='Btn-Container'>Join Lurnigo Today</button>
        </div>
        </div>
      </div>
      <div className='Footer-Container'></div>
    </div>
  )
}

export default Home
