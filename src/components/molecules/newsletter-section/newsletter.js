import React, { useState } from 'react'

import * as  newsletterStyles from './newsletter.module.scss'
import SocialMediaButton from '../../atoms/social-media-button/social-media-button';
import Container from '../../../templates/container'

const newsLetterProps = {
    subscription: {
        sbLabel: 'Schrijf je in voor onze nieuwsbrief',
        sbHoldplace: 'Jouw e-mail',
        sbButton: 'Inschrijven'
    },
    socialNetwork: {
        snLabel: 'Of volg ons via',
        snItems: [
            { to: 'face', icon: 'facebook-f' },
            { to: 'twitter', icon: 'twitter' },
            { to: 'instagram', icon: 'instagram' }
        ]
    }
}

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const { subscription, socialNetwork } = newsLetterProps;
    const { sbLabel, sbHoldplace, sbButton } = subscription;
    const { snLabel, snItems } = socialNetwork;

    const onFormSubmit = e => {
        e.preventDefault();
        console.log('send a request to the backend with the email', email);
    }

    return (
        <Container>
            <div className={newsletterStyles.inner}>
                <div className={`${newsletterStyles.content}`}>
                    <form className={newsletterStyles.content__first} onSubmit={onFormSubmit}>
                        <h2 className={`${newsletterStyles.label}`} >{sbLabel}:</h2>
                        <div className={newsletterStyles.subscription}>
                            <input className={`${newsletterStyles.subscription__input}`} type="email" placeholder={sbHoldplace} onChange={event => setEmail(event.target.value)} />
                            <input className={`${newsletterStyles.subscription__submit}`} type="submit" value={sbButton} />
                        </div>
                    </form>
                    <div className={`${newsletterStyles.content__second}`}>
                        <h2 className={`${newsletterStyles.label}`}>{snLabel}:</h2>
                        <div className={newsletterStyles.socialNetwork}>
                            {snItems?.map((item, index) => <SocialMediaButton key={`socialNetwork__${index}`}  {...item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Newsletter