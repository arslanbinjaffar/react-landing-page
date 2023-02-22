import React from 'react'

const Booking = () => {
  return (
    <section className='section-book'>
      <div className="row">
        <div className="book">
        <div className="book__form">
            <div className="u-margin-bottom-medium">
               <h2 className='heading-secondary'>
                start booking now
               </h2>
            </div>
                <form action="#" className='form'>
                   <div className="form__group">
                     <input type="text" className='form__input' placeholder='Full Name' required id='name'/>
                     <label htmlFor="name" className='form__label' >
                        Full Name
                     </label>
                   </div>
                   <div className="form__group">
                     <input type="text" className='form__input' placeholder='Email Address' required id='email address'/>
                     <label htmlFor="email address" className='form__label' >
                      Email Address
                     </label>
                   </div>
                   <div className="form__group">
                    <div className="form__radio-group">
                        <input type="radio" className="form__radio-input" id='small' name='tour'/>
                        <label htmlFor="small" className='form__radio-label' name='tour'>
                        <span className='form__radio-button'></span>
                          Small tour group</label>
                    </div>
                    <div className="form__radio-group">
                        <input type="radio" className="form__radio-input" id='large' name='tour'/>
                        <label htmlFor="large" className='form__radio-label' name='tour'>
                          <span className='form__radio-button'></span>
                          Large tour group</label>
                    </div>
                   </div>
                   <div className="form__group">
                    <button className='btn btn--green u-margin-bottom-medium'>Next Step &rarr;</button>
                   </div>
                </form>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Booking