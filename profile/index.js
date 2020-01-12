import React from 'react'
import PropTypes from 'prop-types'

import contactData from './contact.json'

import Profile3 from './Profile3'

const ProfScreen = () => <Profile3 {...contactData} />

ProfScreen.navigationOptions = () => ({
  header: null,
})

ProfScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfScreen;