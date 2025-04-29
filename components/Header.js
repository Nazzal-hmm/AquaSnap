import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <MaterialIcons name="opacity" size={24} color="#2196F3" />
            <View style={styles.handIcon}>
              <MaterialIcons name="touch-app" size={20} color="#2196F3" />
            </View>
          </View>
        </View>
        <Text style={styles.title}>aquasnap!</Text>
      </View>
      <View style={styles.blueWave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 40, // for status bar
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  logoContainer: {
    marginRight: 10,
  },
  logoIcon: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
    letterSpacing: 1,
  },
  blueWave: {
    height: 4,
    backgroundColor: '#2196F3',
    opacity: 0.8,
  },
});