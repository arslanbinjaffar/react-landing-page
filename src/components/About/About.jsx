import React from 'react'
import photo1 from '../../img/nat-1-large.jpg'
import photo2 from '../../img/nat-2-large.jpg'
import photo3 from '../../img/nat-3-large.jpg'
const About = () => {
    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventures people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            you are going fall in love with nature
                        </h3>
                        <p className='paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam voluptatum assumenda veritatis porro, at maxime neque molestias, inventore quidem laudantium qui necessitatibus exercitationem, recusandae odit velit veniam labore impedit?
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventure like  you never have before
                        </h3>
                        <p className='paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam voluptatum assumenda veritatis porro, at maxime neque molestias, inventore quidem laudantium qui necessitatibus exercitationem, recusandae odit velit veniam labore impedit?
                        </p>
                        <a href="" className='btn--text'>
                            Learn More &rarr;
                        </a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={photo1} alt="img1" className="composition__photo composition__photo--p1" />
                            <img src={photo2} alt="" className="composition__photo composition__photo--p2" />
                            <img src={photo3} alt="" className="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default About