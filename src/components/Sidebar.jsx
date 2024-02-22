import React from 'react'

function Sidebar() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-xl-3 col-12 rounded-4 left-sidebar p-4">
          <div className='d-flex justify-content-between align-center info'>
            <div >
              <div className='title mb-0'>
                Abdul Rehman
              </div>
            </div>
            <div className='sub-title'>FrontEnd developer</div>
          </div>
          <div className='my-4 d-flex justify-content-center align-items-center'>
            <img src="./assets/images/me.jpeg" height={200} width={200} alt="me" />
          </div>
          <div className='text-center'>
            <p className='mb-0'>khanzadaabdulrehman1@gmail.com</p>
            <p>Karachi, Pakistan</p>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="#" className='text-light'>
                <i class="fa-brands fa-twitter fa-md"></i>
              </a>
            </div>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="#" className='text-light'>
                <i className="fa-brands fa-linkedin fa-md"></i>
              </a>
            </div>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="#" className='text-light'>
                <i className="fa-brands fa-instagram fa-md"></i>
              </a>
            </div>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="#" className='text-light'>
                <i class="fa-brands fa-github fa-md"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar