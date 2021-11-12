import React from "react"
import PropTypes from "prop-types"

import * as  menuTeamNavStyles from './menu-team-nav.module.scss'
import LikeButton from "../like-button/like-button";
import { Link } from "gatsby";

import Crest from '../../atoms/crest/crest'
import Container from '../../../templates/container'

const MenuTeamNav = ({ items, crest, teamUrl }) => {
    return <>
        <div className={`${menuTeamNavStyles.content} `}>
            <Container>
                <div className={`${menuTeamNavStyles.inner} `}>
                    <div className={menuTeamNavStyles.row}>
                        <div className={`${menuTeamNavStyles.image} `}>
                            <Link to={teamUrl}>
                                <Crest crest={crest} />
                            </Link>
                        </div>
                        <div className={menuTeamNavStyles.menuOptions}>
                            <div className={menuTeamNavStyles.menuItems}>
                                {items?.map(({ to, description, active }, index) => (
                                    <div key={`MenuTeamNavItem_${index}`} className={menuTeamNavStyles.item}>
                                        <Link className={`${menuTeamNavStyles.button} ${!!active ? menuTeamNavStyles.active : ''}`} to={`/${to}`}>
                                            {description}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <LikeButton className={menuTeamNavStyles.likeButton} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
}

export const MenuTeamNavProps = {
    items: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        active: PropTypes.bool
    })).isRequired,
    crest: PropTypes.any.isRequired,
    teamUrl: PropTypes.string.isRequired,
}

MenuTeamNav.propTypes = MenuTeamNavProps

export default MenuTeamNav