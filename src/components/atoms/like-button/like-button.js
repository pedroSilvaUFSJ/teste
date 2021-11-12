import React from 'react'
import PropTypes from "prop-types"
import likeIcon from '../../../images/like.svg'

import * as menuTabButtonStyle from "./like-button.module.scss"

const clickHandler = () => {
    console.log('like clicked');
}

const LikeButton = ({ className }) => {
    const text = 'Ik ben fan!';
    return (
        <button className={`${menuTabButtonStyle.button} ${className ? className : ''}`} onClick={() => clickHandler()}>
            <img className={menuTabButtonStyle.imageIcon} src={likeIcon} alt={'like icon'} /><p>{text}</p>
        </button>
    )
}

LikeButton.propTypes = {
    className: PropTypes.any,
}

export default LikeButton