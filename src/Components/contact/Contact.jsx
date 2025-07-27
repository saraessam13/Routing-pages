import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function Contact() {
  return (
    <>
   
    <h2 className='text-center p-3'>

      CONTACT COMPONENT
    </h2>
      <div className='p-3 pb-3'>
        <label for="inputPassword5" class="form-label">UserName</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
</div>
        <label for="inputPassword5" class="form-label">UserAge</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
</div>
        <label for="inputPassword5" class="form-label">UserEmail</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
</div>
        <label for="inputPassword5" class="form-label">UserPassword</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
</div>
<div className='pt-4 pb-4'>

<button type="submit" className='btn btn-success '>Send Message</button>
</div>
      </div>
     
    </>
  )
}
