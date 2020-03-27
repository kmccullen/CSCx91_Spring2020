import React from 'react';
import { StyleSheet,   
 Modal,
 View,
 Text,
 Button
} from 'react-native';


  const ScrollModal = props  => {

  return (
        <Modal visible = {props.visible}>
            <View style = {styles.myModal}>
                <Button title = "go back" onPress={props.onClose}/>
            </View>
        </Modal>
  );
};

const styles = StyleSheet.create({
  myModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0f7f3',
    height: '100%',
    width: '100%'
  },
});

export default ScrollModal;
