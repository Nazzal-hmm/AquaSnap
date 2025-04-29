import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Text, Surface } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function SnapScreen() {
  const [showAlert, setShowAlert] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleCameraPress = async () => {
    if (videoRef.current) {
      await videoRef.current.pauseAsync();
      setIsPlaying(false);
    }
    setShowAlert(true);
  };

  const handleCloseAlert = async () => {
    setShowAlert(false);
    if (videoRef.current) {
      await videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: 'https://drive.google.com/file/d/1wVyeiWufHppObTVogO3UrOVj6mMzbmLm/view?usp=sharing' }}
        style={styles.video}
        shouldPlay={isPlaying}
        isLooping
        resizeMode="cover"
        isMuted={true}
      />

      <TouchableOpacity 
        style={styles.cameraButton}
        onPress={handleCameraPress}
      >
        <MaterialIcons name="camera" size={40} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showAlert}
        onRequestClose={handleCloseAlert}
      >
        <View style={styles.modalContainer}>
          <Surface style={styles.alertBox} elevation={4}>
            <View style={styles.alertHeader}>
              <MaterialIcons name="warning" size={24} color="#FF9800" />
              <Text style={styles.alertTitle}>Leaky Pipe Detected</Text>
              <TouchableOpacity onPress={handleCloseAlert}>
                <MaterialIcons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={styles.alertSubtitle}>We've detected a water leak issue</Text>

            <View style={styles.solutionContainer}>
              <Text style={styles.solutionTitle}>Quick Solutions:</Text>
              <View style={styles.solutionItem}>
                <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
                <Text style={styles.solutionText}>1. Turn off the main water valve</Text>
              </View>
              <View style={styles.solutionItem}>
                <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
                <Text style={styles.solutionText}>2. Apply plumber's tape to the leak</Text>
              </View>
              <View style={styles.solutionItem}>
                <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
                <Text style={styles.solutionText}>3. Use a pipe repair clamp</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.button, styles.emergencyButton]}
                onPress={() => {/* Add emergency call functionality */}}
              >
                <MaterialIcons name="phone" size={20} color="white" />
                <Text style={styles.buttonText}>Call Emergency</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, styles.closeButton]}
                onPress={handleCloseAlert}
              >
                <Text style={styles.buttonText}>Got It</Text>
              </TouchableOpacity>
            </View>
          </Surface>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  alertBox: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF9800',
    flex: 1,
    marginLeft: 10,
  },
  alertSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  solutionContainer: {
    marginVertical: 15,
  },
  solutionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  solutionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  solutionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  emergencyButton: {
    backgroundColor: '#F44336',
  },
  closeButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});