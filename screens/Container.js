import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/nwhacks20-56ead.appspot.com/o/images%2Fstrict%2Fcora.jpg?alt=media&token=fb214178-5854-4d01-9a2e-2bfeab007250'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Cora Fu</Text>
              <Text style={styles.info}>UI/UX Ninja</Text>
              <Text style={styles.description}>Cora is currently connected with 50 other people in this amazing social app</Text>
            </View>
        </View>

        {allImage.map(x => {
                <View>
                    <Image style={styles.avatar} source={{uri: x}}/>
                </View>
            })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#7D35B3",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  headline: {
      borderBottomColor: "#2d2d2d",
      borderRadius: 2,
  }
});



const allImage = [
    'https://firebasestorage.googleapis.com/v0/b/nwhacks20-56ead.appspot.com/o/images%2Fstrict%2Fgroup-photo%20(1).jpg?alt=media&token=d89f5c21-4ea6-49bd-a925-085548ac5282',
    'https://firebasestorage.googleapis.com/v0/b/nwhacks20-56ead.appspot.com/o/images%2Fstrict%2Fgroup-photo.jpg?alt=media&token=24b6c56e-1716-4689-b763-f110ee27c9eb'
]