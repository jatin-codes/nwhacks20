import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import ChatScreen from './ChatScreen';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ChatScreen />;
}

SettingsScreen.navigationOptions = {
  title: 'Chat',
};
