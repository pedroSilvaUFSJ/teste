import React from 'react'

import tvImage from '../../../images/tv.svg'
import * as yourChannelStyles from './your-channel.module.scss';
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'

import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const yourChannelProps = {
    title: 'Jouw eigen Fan2be kanaal?',
    quote: 'Fusce quam orci, pretium at imperdiet nec, facilisis eu risus. Vestibulum ante ipsum primis in faucibus et ultrices posuere cubilia curae',
    linkMessage: 'Ontdek alle voordelen',
    linkUrl: 'create',
}

const YourChannel = () => {
    const { title, quote, linkMessage, linkUrl } = yourChannelProps;
    return <>
        <Container>
            <ContainerInner>
                <div className={`${yourChannelStyles.container}`}>
                    <div className={yourChannelStyles.content}>
                        <img className={yourChannelStyles.image} src={tvImage} alt={title}></img>
                        <div className={yourChannelStyles.info}>
                            <h1 className={yourChannelStyles.title}>{title}</h1>
                            <p className={yourChannelStyles.quote}>{quote}</p>
                            <Link to={`/${linkUrl}`} className={yourChannelStyles.link}>
                                <p className={yourChannelStyles.linkMessage}>{linkMessage} <FontAwesomeIcon icon='arrow-right'></FontAwesomeIcon></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </ContainerInner>
        </Container>
    </>
}

export default YourChannel