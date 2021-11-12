import { Link } from "gatsby"
import React from 'react'
import PropTypes from "prop-types"
import Img from "gatsby-image"

import * as teamHeaderStyles from './team-header-section.module.scss'
import MenuTeamNav from '../../atoms/menu-team-nav/menu-team-nav'
import leftShadow from '../../../images/left-cover-shadow.svg'
import rightShadow from '../../../images/right-cover-shadow.svg'
import Container from '../../../templates/container'

const TeamHeaderSection = ({ title, teamUrl, cover, crest }) => {
    const items = [
        { to: 'Nieuws', description: 'Nieuws', active: true },
        { to: '#', description: 'Seizoen' },
        { to: '#', description: 'Teams' },
        { to: '#', description: 'Transfers' },
        { to: '#', description: 'Info' }
    ]

    return (
        <div className={`${teamHeaderStyles.content}`}>
            <Container>
                <div className={`${teamHeaderStyles.inner}`} >
                    <div className={`${teamHeaderStyles.cover}`}>
                        <Img key='cover_image' className={teamHeaderStyles.cover__image} fluid={cover} imgStyle={{ objectFit: "cover" }} />
                        <img alt='shadow left' src={leftShadow} className={teamHeaderStyles.cover__leftShadow} />
                        <img alt='shadow right' src={rightShadow} className={teamHeaderStyles.cover__rightShadow} />
                        <Link to={teamUrl}>
                            <h1 className={teamHeaderStyles.cover__title}>{title}</h1>
                        </Link>
                    </div>
                </div>
            </Container>
            <MenuTeamNav items={items} crest={crest} teamUrl={teamUrl} />
        </div>
    )
}

TeamHeaderSection.propTypes = {
    teamUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.any.isRequired,
    crest: PropTypes.any.isRequired,
}

export default TeamHeaderSection