import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

import Profile from './Profile'
import styles from './styles'

class MyAccount extends Component {
  render () {
    const {isAccount} = this.props
    return (
      <View style={styles.wrapper}>
        {isAccount && <Profile />}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAccount: state.auth.isAccount || false
  }
}

export default connect(mapStateToProps)(MyAccount)
