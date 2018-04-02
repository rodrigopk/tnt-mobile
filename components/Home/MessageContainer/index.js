import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MessageContainer = ({ title, message }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      { title }
    </Text>
    <Text style={styles.message}>
      { message }
    </Text>
  </View>
);

export default MessageContainer;
