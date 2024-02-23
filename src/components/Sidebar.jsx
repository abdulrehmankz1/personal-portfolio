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
          <div className='text-center mb-4'>
            <p className='mb-0'>khanzadaabdulrehman1@gmail.com</p>
            <p>Karachi, Pakistan</p>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='info-icon d-flex justify-content-center align-items-center rounded-5 me-2'>
              <a href="https://twitter.com/AbdulRehmaKz">
                <i className="fa-brands fa-twitter fa-md"></i>
              </a>
            </div>
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
          </div>
          <div className='d-flex justify-content-center align-items-center'>
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