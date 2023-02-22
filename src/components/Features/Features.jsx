import React from 'react'

const Features = () => {
    const FeaturesData=[
        {title:"Explore the World",icon:"internet"},
        {title:"meet nature",icon:"compass"},
        {title:"Find your way",icon:"basic-map"},
        {title:"live healthier life here",icon:"basic-heart"},
    ]
  return (
    <main>

    <section className='section-features'>
        <div className="row">
            {FeaturesData.map(({title,icon},index)=>{
                return(      
            <div className="col-1-of-4" key={index}>
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-world">
                     {icon} wala icon 

                </i>
                <h3 className="heading-tertiary u-margin-small">
                    {title}
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus alias obcaecati maiores, nam commodi nisi  </p>
            </div>
        </div>
                )
            })}
        </div>

    </section>
    </main>
  )
}

export default Features