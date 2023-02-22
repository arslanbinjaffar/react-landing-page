import React from 'react'

const Tours = () => {
    const ToursData=[
        {title:"The sea explore",Class:"-1",n1:3,n2:30,n3:2,line:"crazy hotels",line2:"easy",price:"297"},
        {title:"the forest hiker",Class:"-2",n1:7,n2:40,n3:6,line:"provided hotel",line2:"medium",price:"497"},
        {title:"the snow adventurer",Class:"-3",n1:5,n2:15,n3:3,line:"provided tents",line2:"hard",price:"897"},
    ]
  return (
    <section className='section-tours'>
     <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Most Popular Tours
                    </h2>
                </div>
                <div className="row">
                    {ToursData.map(({title,Class,n1,n2,n3,line,line2,price},index)=>{
                        return(
                            <div className="col-1-of-3" key={index}>
                            <div className="card">
                            <div className="card__side card__side--front">
                                <div className={`card__picture card__picture-${Class}`}>
                                  &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className={`card__heading-span card__heading-span-${Class}`}>
                                    {title}
                                    </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>
                                            {n1} days tour
                                        </li>
                                        <li>
                                            upto {n2} peoples
                                        </li>
                                        <li>
                                            {n3} tour guide
                                        </li>
                                        <li>
                                            sleep in {line}
                                        </li>
                                        <li>
                                            diffculty:{line2}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`card__side card__side--back card__side--back-${Class}`}>
                                <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">
                                        ${price}
                                    </p>
                                </div>
                                    <a href="" className='btn btn--white btn--animated'>Book Now!</a>
                                </div>
                            </div>
                            </div>
                        </div>
    
                        )
                    })}
                                       
                </div>
                <div className="u-center-text u-margin-top-huge">
                <a href="" className='btn btn--green'>Discover all tours</a>
                </div>
    </section>
  )
}

export default Tours