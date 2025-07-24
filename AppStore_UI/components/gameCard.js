import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Rating } from 'react-native-ratings';
import { storeColors } from '../theme';

export default function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Image source={game.image} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.85)']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{game.title}</Text>
          <View style={styles.ratingRow}>
            <Rating
              readonly
              type="custom"
              ratingImage={require('../assets/images/fullStar.png')}
              ratingColor="#f1c40f"
              ratingBackgroundColor="#d3d3d3"
              ratingCount={5}
              imageSize={18}
              startingValue={game.stars || 0}
              style={styles.rating}
            />
            <Text style={styles.downloads}>{game.downloads} downloads</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250, 
    height: 240, 
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: '#222C3A',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 90, // slightly taller bottom overlay
    width: '100%',
    justifyContent: 'flex-end',
    padding: 12,
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 8,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    paddingVertical: 0,
  },
  downloads: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 8,
  },
});
