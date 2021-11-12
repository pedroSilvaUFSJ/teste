import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as navMobileStyles from './navigation-mobile.module.scss'

import MenuNav from "../menu-nav/menu-nav"
import logoImage from "../../../images/logo.svg"
import HamburguerButton from "../../atoms/hamburger-button/hamburguer-button"
import LinkItem, { LinkItemProps } from "../../atoms/link-item/link-item"
import MenuTab, { DataItemProps } from "../menu-tab/menu-tab"
import SearchBar from "../../atoms/search-bar/search-bar"

const NavegationMobile = ({ navegationItems, tabContentData, className, profileOption, notificationItem }) => {
  const [visibleTab, setVisibleTab] = useState(() => null);
  const [open, setOpen] = useState(() => false);

  const hamburguerButtonClickHandler = (id) => {
    setOpen((old) => !old);
    setVisibleTab(null);
  }

  const menuTabClickHandler = (id) => {
    setOpen(false);
    setVisibleTab((old) => (old === id ? null : id))
  }

  return (
    <div className={`${className} ${navMobileStyles.content}`} >
      <nav role="navigation" className={navMobileStyles.navigationHead}>
        <Link className={navMobileStyles.menuItems} to={"/"}>
          <img className={navMobileStyles.navigationLogo} src={logoImage} alt="logo" />
        </Link>
        {notificationItem && <MenuTab data={[notificationItem]} visibleTab={visibleTab} setVisibleTab={menuTabClickHandler} />}
        <HamburguerButton open={open} handleClick={hamburguerButtonClickHandler} backgroundColor='white' />
      </nav>
      {!!visibleTab &&
        <div className={navMobileStyles.tabContent}>
          {
            tabContentData?.map(({ id, tabContent }, index) => (
              <div key={`tabContent${index}`} style={visibleTab === id ? {} : { display: 'none' }}>
                {tabContent}
              </div>
            ))
          }
        </div>
      }
      {!visibleTab && open &&
        <div className={navMobileStyles.body}>
          <SearchBar className={navMobileStyles.searchBar} />
          <MenuNav items={navegationItems} />
          <div className={navMobileStyles.profileItem}>
            <LinkItem {...profileOption} linkClass={navMobileStyles.linkClass} />
          </div>
        </div>
      }
    </div>
  )
}

NavegationMobile.propTypes = {
  navegationItems: PropTypes.arrayOf(PropTypes.shape(LinkItemProps)).isRequired,
  className: PropTypes.string,
  profileOption: PropTypes.shape(LinkItemProps).isRequired,
  notificationItem: PropTypes.shape(DataItemProps)
}

export default NavegationMobile