import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'gatsby'

import * as  NotificationBarStyles from './notification-bar.module.scss'
import NotificationItem, { NotificationItemProps } from '../../atoms/notification-item/notification-item'

const NotificationBar = ({ items }) => {
    return <>
        <div className={NotificationBarStyles.content}>
            {
                items?.map((item, index) => (
                    <Link style={{ textDecoration: "none" }} key={`circle-item-key${index}`} to={`/${item.slug}`}>
                        <NotificationItem
                            image={item.image}
                            title={item.title}
                            alert={item.alert}
                        />
                    </Link>
                ))
            }
        </div>
    </>
}

NotificationBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(NotificationItemProps)).isRequired,
}

export default NotificationBar