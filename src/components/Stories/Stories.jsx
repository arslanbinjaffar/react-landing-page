import React from 'react'
import personimg from "../../img/nat-8.jpg"
import personimg2 from "../../img/nat-9.jpg"
import video1 from '../../img/video.mp4';
import video2 from '../../img/video.webm';
const Stories = () => {
    const storiesData=[
        {name:"MARY SMITH",title:"I have the best week ever with my family",img:personimg,},
        {name:"JACK WILSON",title:"WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",img:personimg2,},
    ]
  return (
    <section className='section-stories'>
        <div className="bg-video" >
            <video className='bg-video__content'autoPlay muted loop>
              <source src={video1}/>
              <source src={video2}/>
            </video>
        </div>
           <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>
                {storiesData.map(({name,title,img},index)=>{
                    return (
                <div className="row" key={index}>
                    <div className="story">
                        <figure className='story__shape'>
                          <img src={img} alt="persom image" className='story__img' />
                          <figcaption className='story__caption'>
                            {name}
                          </figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-small">
                                {title}
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit soluta dolor unde quidem! Expedita ducimus nam consequatur dolorum voluptatibus eum deserunt, maxime possimus et commodi rerum fugit cupiditate, nobis velit?
                            </p>
                        </div>
                    </div>
                </div>
                    )
                })}
                <div className="u-center-text u-margin-top-huge">
                <a href="" className='btn--text'>
                    Read all stories &rarr;
                </a>
                </div>
    </section>
  )
}

export default Stories