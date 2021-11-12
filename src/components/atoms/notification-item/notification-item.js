import React from 'react'
import PropTypes from "prop-types"

import * as notificationItemStyles from './notification-item.module.scss'

const NotificationItem = ({ image, title, alert }) => {
    return <>
        <div className={notificationItemStyles.content}>
            <div className={notificationItemStyles.imageContent}>
                <img
                    alt={title}
                    src={image}
                    className={alert ? notificationItemStyles.imageAlert : ''}
                />
                {!!alert && <div className={notificationItemStyles.circleStatus}></div>}
            </div>
            <p>{title}</p>
        </div>
    </>
}

NotificationItem.defaultProps = {
    alert: false
}

export const NotificationItemProps = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alert: PropTypes.bool
}

NotificationItem.propTypes = NotificationItemProps

export default NotificationItem