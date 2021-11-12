
import React from "react";
import PropTypes from "prop-types"
import TinySlider from "tiny-slider-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { window, exists } from 'browser-monads';

import * as styles from './slider.module.scss'
import { ArticlePreviewProps } from "../../molecules/article-preview/article-preview";
import backgroundButton from '../../../images/slider-button.svg'

const SliderButton = ({ side, className }) => (
    <div className={`${styles.sliderButton} ${className}`} role="button">
        <img className={`${styles.sliderButton__img} ${side === 'left' ? styles.sliderButton__left : ''}`} alt='slider prev button' src={backgroundButton} />
        <svg className={`${styles.sliderButton__svg}`} width="100%" height="100%" viewBox={`${side === 'left' ? 0.5 : -0.5} 0 4 2`}>
            <FontAwesomeIcon icon={`angle-${side === 'left' ? 'left' : 'right'}`} />
        </svg>
    </div>
)

const makeid = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const Slider = ({ items, className }) => {
    const randomId = makeid();

    const settings = {
        loop: false,
        items: 2,
        slideBy: 'page',
        nav: false,
        autoplay: false,
        speed: 400,
        swipeAngle: false,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: `#customizeControls${randomId}`,
        fixedWidth: 212,
        responsive: {
            768: {
                fixedWidth: 284,
            },
        }
    }

    return (
        <div className={`${styles.content} ${className ? className : ''}`}>
            {exists(window) && <TinySlider settings={settings}>{items}</TinySlider>}
            <div className={`${styles.controls}`} id={`customizeControls${randomId}`}>
                <SliderButton className={styles.prev} side='left' />
                <SliderButton className={styles.next} side='right' />
            </div>
        </div>
    );
}

Slider.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(ArticlePreviewProps)).isRequired,
    className: PropTypes.string
}

export default Slider