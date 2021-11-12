import React from 'react'

import profileImage from "../../../images/profile-pic.png"

import NotificationBar from "../../molecules/notification-bar/notification-bar"
import SearchBar from "../../atoms/search-bar/search-bar"

import OverHeader from '../../molecules/over-header/over-header'
import NavigationDesktop from '../../molecules/navigation-desktop/navigation-desktop'
import NavegationMobile from '../../molecules/navigation-mobile/navigation-mobile'
import * as headerStyles from './header.module.scss'

const navegationItems = [
  { description: 'Home', to: '', icon: 'user' },
  { description: 'Voetbal', to: 'blog/Voetbal', icon: 'volleyball-ball' },
  { description: 'Wielrennen', to: 'blog/bike', icon: 'biking' },
]

const itemList = [
  { slug: 'bla1', title: 'Test 1', image: profileImage, alert: true },
  { slug: 'bla2', title: 'Test 2 Label BlablaBla', image: profileImage, alert: false }
]

const notificationItem = { id: '2', tabIcon: "notification", icon: 'bell', tabContent: <NotificationBar items={itemList} />, counter: itemList.filter(item => item.alert).length };

const tabContentData = [
  { id: '1', tabIcon: "search", icon: 'search', tabContent: <SearchBar /> },
  { id: '2', tabIcon: "notification", icon: 'bell', tabContent: <NotificationBar items={itemList} />, counter: itemList.filter(item => item.alert).length },
  { id: '3', tabIcon: "profile", icon: 'user', tabContent: 'Tab Content 3' },
]

const profileOption = {
  to: 'profile',
  description: 'Mijn account',
  icon: 'user'
}

const Header = () => (
  <div className={headerStyles.content}>
    <div className={headerStyles.overHeaderContent}>
      <div>
        <OverHeader />
      </div>
    </div>
    <div className={headerStyles.navigationMenuContent}>
      <div className={headerStyles.navigationMenu}>
          <NavigationDesktop
            className={headerStyles.navigationDesktop}
            navegationItems={navegationItems}
            tabContentData={tabContentData}
          />
          <NavegationMobile
            className={headerStyles.navigationMobile}
            tabContentData={tabContentData}
            navegationItems={navegationItems}
            notificationItem={notificationItem}
            profileOption={profileOption}
          />
      </div>
    </div>
  </div>
)
export default Header