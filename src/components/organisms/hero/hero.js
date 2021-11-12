import React from 'react'

import * as  heroStyles from './hero.module.css'

const Hero = ({ data }) => (
  <div className={heroStyles.hero}>
    <img className={heroStyles.heroImage} alt={data.name} src={data.heroImage.fluid.src} />
    <div className={heroStyles.heroDetails}>
      <h3 className={heroStyles.heroHeadline}>{data.name}</h3>
      <p className={heroStyles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
export default Hero