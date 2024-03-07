import React, { useEffect } from 'react'
import AOS from 'aos';
import '../styles.scss';

function Sidebar() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='mx-3'>
      <div className="row">
        <div className="col-xl-3 col-12 rounded-4 left-sidebar p-4" data-aos="fade-right">
          <div className='info text-center'>
            <div>
              <div className='title mb-0'>
                Abdul Rehman
              </div>
            </div>
            <div className='sub-title'>(Front-End developer)</div>
          </div>
          <div className='my-4 d-flex justify-content-center align-items-center'>
            <img src="./assets/images/me.jpeg" height={230} width={230} className='rounded-4 mb-1' alt="me" />
          </div>
          <div className='text-center mb-4 small'>
            <p className='mb-0'>+92 3161 612223</p>
            <p className='mb-0'>khanzadaabdulrehman1@gmail.com</p>
            <p>Karachi, Pakistan</p>
          </div>
          <div className='my-4 text-center fw-lighter rights'>
            © 2024 Abdul Rehman. All Rights Reserved
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="https://www.linkedin.com/in/abdul-rehman-khanzada-661757237/">
                <i className="fa-brands fa-linkedin fa-md"></i>
              </a>
            </div>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="https://www.upwork.com/freelancers/~01ac9dfd5b35dc7b35?viewMode=1">
                <i className="fa-brands fa-upwork fa-md"></i>
              </a>
            </div>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="https://github.com/abdulrehmankz1">
                <i className="fa-brands fa-github fa-md"></i>
              </a>
            </div>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="https://twitter.com/AbdulRehmaKz">
                <i className="fa-brands fa-twitter fa-md"></i>
              </a>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center w-full mb-1'>
            <a href="mailto:khanzadaabdulrehman1@gmail.com" className='text-decoration-none hire-btn rounded-5'>
              <i class="fa-regular fa-envelope"></i>
              &nbsp;HIRE ME!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar