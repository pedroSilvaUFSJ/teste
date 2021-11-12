import React from 'react'

import * as footerStyles from './footer.module.scss'
import logoImage from "../../../images/logo.svg"
import iconImage from "../../../images/footer-icon.svg"
import LinkList from '../../atoms/link-list/link-list'
import LanguageSelector from '../../atoms/language-selector/language-selector'
import Container from '../../../templates/container'

const Footer = () => {
  const languageList = [
    { label: 'Nederlands', active: true },
    { label: 'Frans' },
    { label: 'Engels' },
  ]

  const pagesList = [
    { link: 'OverOns', description: 'Over ons' },
    { link: 'Samenwerken', description: 'Samenwerken' },
    { link: 'Jobs', description: 'Jobs' },
    { link: 'Contact', description: 'Contact' },
  ]

  const infoList = [
    { link: 'privacy', description: 'Privacy' },
    { link: 'legal', description: 'Legal' },
    { link: 'cookies', description: 'Cookies' },
  ]

  return <>
    <footer className={`${footerStyles.content} `}>
      <Container>
        <div className={footerStyles.content__inner}>
          <div className={`${footerStyles.container}`}>
            <div className={`${footerStyles.first}`}>
              <img src={logoImage} alt="logo" />
            </div>
            <div className={`${footerStyles.middle}`}>
              <div className={footerStyles.middle__row}>
                {languageList?.map((item, index) => <LanguageSelector className={`pb-1 footerStyles.item`} key={`languageList${index}`} value={item} />)}
              </div>
              <div className={footerStyles.middle__row}>
                <LinkList items={pagesList} itemClass={footerStyles.item} linkClass={footerStyles.link} />
              </div>
              <div className={`${footerStyles.middle__row}`}>
                <h4 className={footerStyles.company} >&copy; Fan2be</h4>
                <LinkList items={infoList} itemClass={footerStyles.lastRow} linkClass={footerStyles.lastRow__link} />
              </div>
            </div>
            <div className={`${footerStyles.last}`}>
              <img src={iconImage} alt="company icon" />
            </div>
          </div>
        </div>
      </Container>
    </footer >
  </>
}
export default Footer