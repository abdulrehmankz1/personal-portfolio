import React, { useEffect } from 'react'
import AOS from 'aos';
import '../styles.scss';

function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='custom-container mt-xl-5 mt-lg-5 mt-md-5 mt-3 mb-0 pb-0 section_space contact_section' data-aos="fade-up">
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-dollar-sign"></i>
        &nbsp; CONTACT
      </span>
      <div className='title_container' data-aos="fade-right">
        <h2 className='text-light'>
          Let's Work <span className='hero_content'>
            Together!
          </span>
        </h2>
      </div>
      <h3 data-aos="fade-up">
        khanzadaabdulrehman1@gmail.com
      </h3>
      <div>
        <form action="mailto:khanzadaabdulrehman1@gmail.com" method="post" enctype="text/plain" data-aos="fade-up">
          <div className='me-xl-5 me-lg-5 me-md-5 me-0'>
            <div class="row">
              <div class="col-md-6" data-aos="fade-up">
                <div class="form-group">
                  <label for="fullName">Full Name
                    <span className='star_color'>*</span>
                  </label>
                  <input type="text" class="form-control border-0" id="fullName" name="fullName" placeholder='Your full name' required />
                </div>
              </div>
              <div class="col-md-6" data-aos="fade-up">
                <div class="form-group">
                  <label for="email">Email<span className='star_color'>*</span></label>
                  <input type="email" class="form-control" id="email" name="email" placeholder='Your email address' required />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6" data-aos="fade-up">
                <div class="form-group">
                  <label for="phoneNumber">Phone Number
                    <span className='optional ms-1'>(optional)</span>
                  </label>
                  <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber" placeholder='Your phone number' />
                </div>
              </div>
              <div class="col-md-6 mb-xl-0 mb-lg-0 mb-md-0 mb-4" data-aos="fade-up">
                <div class="form-group">
                  <label for="subject">Subject
                    <span className='star_color'>*</span>
                  </label>
                  <select class="form-control select_container" id="subject" name="subject" required>
                    <option value="" selected>Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support Request</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12" data-aos="fade-up">
                <div class="form-group">
                  <label for="budget">Your Budget
                    <span className='optional ms-1'>(optional)</span>
                  </label>
                  <input type="number" class="form-control" id="budget" placeholder='A range budget for your project' name="budget" />
                </div>
              </div>
            </div>
            <div class="row" data-aos="fade-up">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="message">Message
                    <span className='star_color'>*</span>
                  </label>
                  <textarea class="form-control message" id="message" name="message" rows="4" placeholder='Wrire your message here ...' required></textarea>
                </div>
              </div>
            </div>
            <div class="row mb-5" data-aos="fade-right">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="attachment" class="d-flex align-items-center">
                    <i class="fa-solid fa-cloud-arrow-up me-3"></i>
                    Add an attachment
                  </label>
                  <input type="file" class="form-control-file d-none" id="attachment" name="attachment" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary">
                  Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection