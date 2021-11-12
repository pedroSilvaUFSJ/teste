import React from 'react'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as  searchBarStyles from './search-bar.module.scss'

const SearchBar = ({ className }) => (
    <div className={`${className ? className : ''} ${searchBarStyles.content}`}>
        <div className={`${searchBarStyles.border}`}>
            <input className={searchBarStyles.inputSearch} placeholder='Zoek jouw club, sporter of artikel...' />
            <button className={searchBarStyles.searchButton}>
                <FontAwesomeIcon icon={'search'} size="lg" />
            </button>
        </div>
    </div>
)

SearchBar.propTypes = {
    className: PropTypes.string
}

export default SearchBar