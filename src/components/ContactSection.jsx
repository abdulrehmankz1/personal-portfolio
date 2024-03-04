import React from 'react'

function ContactSection() {
  return (
    <div className='custom-container my-5 section_space contact_section'>
      <span class="badge rounded-pill section_badge">
        <i class="fa-solid fa-dollar-sign"></i>
        &nbsp; CONTACT
      </span>
      <div className='w-75'>
        <h2 className='text-light'>
          Let's Work <span className='hero_content'>
            Together!
          </span>
        </h2>
      </div>
      <h3>
        khanzadaabdulrehman1@gmail.com
      </h3>
      <div>
        <form action="mailto:khanzadaabdulrehman1@gmail.com" method="post" enctype="text/plain">
          <div className='me-5'>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="fullName">Full Name
                    <span className='star_color'>*</span>
                  </label>
                  <input type="text" class="form-control" id="fullName" name="fullName" placeholder='Your full name' required />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="email">Email<span className='star_color'>*</span></label>
                  <input type="email" class="form-control" id="email" name="email" placeholder='Your email address' required />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="phoneNumber">Phone Number
                    <span className='optional ms-1'>(optional)</span>
                  </label>
                  <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber" placeholder='Your phone number' />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="subject">Subject
                    <span className='star_color'>*</span>
                  </label>
                  <select class="form-control" id="subject" name="subject" required>
                    <option value="" disabled selected>Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support Request</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="budget">Your Budget
                    <span className='optional ms-1'>(optional)</span>
                  </label>
                  <input type="number" class="form-control" id="budget" placeholder='A range budget for your project' name="budget" />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="message">Message
                    <span className='star_color'>*</span>
                  </label>
                  <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="attachment">Attach File</label>
                  <input type="file" class="form-control-file" id="attachment" name="attachment" />
                  <small class="form-text text-muted">
                    You can attach a file if needed.
                  </small>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection