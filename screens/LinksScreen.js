import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import * as ImagePicker from 'expo-image-picker';

export default class LinkScreen extends React.Component {

  constructor(props){
    super();
    this.state = {
      hasPermission: null,
      setHasPermission: null,
      type: Camera.Constants.Type.back,
      setType: Camera.Constants.Type.back,
      focusedScreen: false,
      // camera: null,
      onPictureSaved: null,
      takeImageText: null,
      photo: null,
      status: null,
    }

    this.setState = this.setState.bind(this);
    this.takePicture = this.takePicture.bind(this);
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    
    this.setState({
      status: 'granted'
    })

    navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true })
    );
    navigation.addListener('willBlur', () =>
      this.setState({ focusedScreen: false })
    );
  }

  async componentWillUnmount(){
  }

  // useEffect = (() => {
  //   (async () => {
      
  // }, []);


//   takePicture = () => {
    // 
//     this.setState({
//         takeImageText: "... PROCESSING PICTURE ..."
//     }); 
//     Camera.takePictureAsync({ skipProcessing: true }).then((data) => {
//         this.setState({
//             takeImageText: "PICTURE TAKEN",
//             photo: data.uri
//         }, console.log(data.uri))
//     })
// }
// 
  // takePicture = async() => {
  //   console.log('yes', this.camera);
  //   if (this.camera) {
  //     const data = await this.camera.takePictureAsync()
  //     .then(data => {
  //       console.log('data uri:' + data.uri);
  //       saveImage(data.uri);
  //     });
  //     }
  // };

  async takePicture() {
    if (this.camera) {
      const data = await this.camera.takePictureAsync()
      .then(data => {
        console.log('data uri:' + data.uri);
      });
      }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    }).then(data => {
      console.log('data uri:' + data.uri);
    });
  }


  render(){

    const {type, status, setType, hasPermission, setHasPermission} = this.state;

  // if (status === null) {
  //   return <View />;
  // }
  if (status === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    // <View style={{ flex: 1 }}>
      this.state.focusedScreen ? 
      (
        <Camera style={{ flex: 1 }} type={this.state.type}
        ref={ref => {
          this.camera = ref;
        }}
        >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            onPress={() => {
              this.setState({
                type: type ? Camera.Constants.Type.back : Camera.Constants.Type.front
              })
            }}
            >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            // onPress={() => this.takePicture()}
            onPress={this.takePicture}
            >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Click </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent'
            }}
            // onPress={() => this.takePicture()}
            onPress={this.pickImage}
            >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Pick image </Text>
          </TouchableOpacity>

        </View>
      </Camera>
      )
      : 
      <View>

      </View>
    // </View>
  );
  }
}