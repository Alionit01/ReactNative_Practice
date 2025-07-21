import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton({ value, onPress, containerStyle }) {
  return (
    <LinearGradient
      colors={['rgba(9,181,211,0.9)', 'rgba(58,131,244,0.9)']}
      style={[styles.gradientBox, containerStyle]}
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 1, y: 1 }}
    >
      <TouchableOpacity onPress={onPress} style={styles.touchableStyle}>
        <Text style={styles.text}>
          {value}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },
  gradientBox: {
    width: 85,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    padding: 10, 
    marginRight: 8,
     marginTop: 10,
  },
   
  
});
