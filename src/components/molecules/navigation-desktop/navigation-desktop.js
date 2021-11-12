import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MenuNav from "../menu-nav/menu-nav"
import logoImage from "../../../images/logo.svg"
import * as navDesktopStyles from './navigation-desktop.module.scss'
import MenuTab from '../menu-tab/menu-tab'
import { LinkItemProps } from "../../atoms/link-item/link-item"
import ContainerInner from "../../../templates/container-inner"
import Container from "../../../templates/container"

const NavegationDesktop = ({ navegationItems, tabContentData, className }) => {
  const [visibleTab, setVisibleTab] = useState(() => null);

  const menuTabClickHandler = (id) => {
    setVisibleTab((old) => (old === id ? null : id))
  }

  return (

    <div className={`${className} ${navDesktopStyles.content}`} >
      <Container className={navDesktopStyles.container}>
        <ContainerInner>
          <nav role="navigation" className={navDesktopStyles.navigationContent}>
            <div className={navDesktopStyles.menuItems} >
              <Link className={navDesktopStyles.navigationLogo} to={"/"}>
                <img src={logoImage} alt="logo" />
              </Link>
              <MenuNav items={navegationItems} />
            </div>
            <div className={navDesktopStyles.menuTab}>
              <MenuTab data={tabContentData} visibleTab={visibleTab} setVisibleTab={menuTabClickHandler} />
            </div>
          </nav>
        </ContainerInner>
      </Container>
      {visibleTab &&
        <Container >
          <ContainerInner>
            <div className={navDesktopStyles.tabContent}>
              {tabContentData?.map(({ id, tabContent }, index) => (
                <div key={`tabContent${index}`} style={visibleTab === id ? {} : { display: 'none' }}>
                  {tabContent}
                </div>
              ))}
            </div>
          </ContainerInner >
        </Container >
      }
    </div>
  )
}

NavegationDesktop.propTypes = {
  navegationItems: PropTypes.arrayOf(PropTypes.shape(LinkItemProps)).isRequired,
  tabContentData: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, tabContent: PropTypes.any })).isRequired,
  className: PropTypes.string
}

export default NavegationDesktop