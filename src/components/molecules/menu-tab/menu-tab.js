import React from "react"
import PropTypes from "prop-types"

import MenuTabButton from "../../atoms/menu-tab-button/menu-tab-button"

import * as  menuTabStyles from './menu-tab.module.scss'

const MenuTab = ({ data, visibleTab, setVisibleTab }) => {
    const listTitles = data.map((item, index) =>
        <li key={`menuTabItem${index}`}>
            {
                <MenuTabButton
                    isActive={visibleTab === item.id}
                    clickHandler={() => setVisibleTab(item.id)}
                    icon={item.icon}
                    counter={item.counter}
                />
            }
        </li>
    )

    return <>
        <ul className={menuTabStyles.content}>
            {listTitles}
        </ul>
    </>
}

export const DataItemProps = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    counter: PropTypes.number
}

MenuTab.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(DataItemProps)).isRequired,
    visibleTab: PropTypes.string,
    setVisibleTab: PropTypes.func
}

export default MenuTab