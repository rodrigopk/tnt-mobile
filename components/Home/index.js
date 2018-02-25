import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchHelloMessage } from './actions';
import styles from './styles';

class Home extends Component {
  componentDidMount() {
    this.props.getMessage();
  }

  render() {
    if (this.props.loading) {
      return (
          <View style={styles.activityIndicatorContainer}>
              <ActivityIndicator
                  animating={true}
                  style={[{height: 80}]}
                  size="small"
              />
          </View>
      );
    } else {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            { this.props.message }
          </Text>
        </View>
      );
    }
  }
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  message: state.home.message,
});

const mapDispatchToProps = dispatch => ({
  getMessage: () =>  dispatch(fetchHelloMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
