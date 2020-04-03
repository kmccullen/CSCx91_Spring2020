import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

export default class Scanner extends Component {

  constructor(props) {
    super(props);

    this.state = { flashMode: RNCamera.Constants.FlashMode.off };
  }

  toggleFlash = () => {
    this.setState(
      { flashMode: this.state.flashMode == RNCamera.Constants.FlashMode.off ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
                this.camera = ref;
              }
          }
          autoFocus={true}
          captureAudio={false}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flashMode}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <TouchableOpacity onPress={this.toggleFlash} style={styles.flash}>
              {this.state.flashMode == RNCamera.Constants.FlashMode.off
                ? <FontAwesomeIcon icon={ faBolt } style={{color: "black"}} />
                : <FontAwesomeIcon icon={ faBolt } style={{color: "yellow"}} />
              }
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2, flexDirection: 'row', }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.scan}>
              <Text>Scan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  flash: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    margin: 20,
  },

  scan: {
    fontSize: 14,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    margin: 20,
  },
});
