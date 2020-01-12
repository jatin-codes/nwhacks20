import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={{uri: 'https://firebasestorage.googleapis.com/v0/b/nwhacks20-56ead.appspot.com/o/images%2Fstrict%2FAsset%201%404x%20(1).png?alt=media&token=5f4d3954-2fa9-4e4a-a551-a8dc0f20a9ab'}}
            />
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.imageContainer}>
              <Image
              style={{width: 300, height: 300}}
              source = {{
                uri: 'https://firebasestorage.googleapis.com/v0/b/nwhacks20-56ead.appspot.com/o/images%2Fstrict%2Fgroup-photo%20(1).jpg?alt=media&token=d89f5c21-4ea6-49bd-a925-085548ac5282',
              }}
              />

              <View style={styles.caption}>
                <Text>Hacking away!!!!!!!!******* :P</Text>
              </View>
            </View>


            <View style={styles.imageContainer}>
              <Image
              style={{width: 300, height: 300}}
              source = {{
                uri: 'https://firebasestorage.googleapis.com/v0/b/nwhacks20-56ead.appspot.com/o/images%2Fstrict%2Fgroup-photo%20(1).jpg?alt=media&token=d89f5c21-4ea6-49bd-a925-085548ac5282',
              }}
              />

              <View style={styles.caption}>
                <Text>Hacking away!!!!!!!!******* :P</Text>
              </View>
            </View>

            <View style={styles.imageContainer}>
              <Image
              style={{width: 300, height: 300}}
              source = {{
                uri: 'https://firebasestorage.googleapis.com/v0/b/nwhacks20-56ead.appspot.com/o/images%2Fstrict%2Fgroup-photo%20(1).jpg?alt=media&token=d89f5c21-4ea6-49bd-a925-085548ac5282',
              }}
              />

              <View style={styles.caption}>
                <Text>Hacking away!!!!!!!!******* :P</Text>
              </View>
            </View>
          </View>
  
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  imageContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    margin: 12
  },
  logo: {
    margin: 10,
    marginLeft: 25,
    width: 300,
    height: 80
  },
  logoContainer: {
    margin: 10,
    padding: 10
  },
  caption: {
    padding: 10,
    fontSize: 22
  }
});
