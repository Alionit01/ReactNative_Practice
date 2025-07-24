import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GameCard from "../components/gameCard";
import GradientButton from "../components/gradientButton";
import { storeColors } from "../theme";


const catagories = ["Action", "Family", "Puzzle", "Adventure", "Racing"]

export default function Index() {

  const [activeCategory, setActiveCategory] = useState("active");
  const featured = [
  {
      id: 1,
      title: "Alto's Adventure",
      image: require('../assets/images/altosAdventure.png'),
      downloads: '20k',
      stars: 4
     
  },
  {
      id: 2,
      title: 'Subway Surfer',
      image: require('../assets/images/subway.png'),
      downloads: '5M',
      stars: 4
  },
  {
      id: 3,
      title: 'Free Fire',
      image: require('../assets/images/freeFire.png'),
      downloads: '100M',
      stars: 3
  },
  
  {
      id: 4,
      title: 'Zooba',
      image: require('../assets/images/zooba.png'),
      downloads: '200k',
      stars: 4
  },
]

const games = [
  {
      id: 1,
      title: 'Shadow Fight',
      image: require('../assets/images/shadowFight.png'),
      downloads: '20M',
      stars: 4.5
  },
  {
      id: 2,
      title: 'Valor Arena',
      image: require('../assets/images/valorArena.png'),
      downloads: '10k',
      stars: 3.4
  },
  {
      id: 3,
      title: 'Frag',
      image: require('../assets/images/frag.png'),
      downloads: '80k',
      stars: 4.6
  },
  {
      id: 4,
      title: "Zooba Wildlife",
      image: require('../assets/images/zoobaGame.png'),
      downloads: '40k',
      stars: 3.5
  },
  {
      id: 4,
      title: "Clash of Clans",
      image: require('../assets/images/clashofclans.png'),
      downloads: '20k',
      stars: 4.2
  },
];



  return (
    <LinearGradient
      colors={['#6278a9ff', '#37579bff', '#132863ff']}
      style={styles.gradientBox}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
  <ScrollView contentContainerStyle={{  }}>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingTextCat}>Browse Games</Text>
      </View>

      <View style={{ paddingLeft: 16, height: 60 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            catagories.map(cat =>
              cat === activeCategory ? (
                <GradientButton key={cat} value={cat} />
              ) : (
                <TouchableOpacity
                  onPress={() => setActiveCategory(cat)}
                  key={cat}
                  style={styles.touchableStyle}
                >
                  <Text>{cat}</Text>
                </TouchableOpacity>
              )
            )
          }
        </ScrollView>
      </View>

      {/* Featured Row */}
      <View style={{ paddingHorizontal: 16, marginTop: 16  }}>
        <Text style={styles.headingTextFeat}>
          Featured Games
        </Text>
        <View style={{paddingLeft: 12, height: 260, paddingTop: 12}}> 
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              featured.map((item,index) =>{
                return(
                  <GameCard key={index} game={item}/>
                )
              })
            }
          </ScrollView>
        </View>

      </View>
    </View>
  </ScrollView>
</SafeAreaView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 16,
    marginLeft: 16,
  },
  gradientBox: {
    flex: 1,
    width: "100%",

  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headingTextCat: {
    marginLeft: 16,
    fontSize: 28,
    fontWeight: 'bold',
    color: storeColors.text,
  },
  headingTextFeat: {
    marginLeft: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: storeColors.text,
  },
  textContainer: {
    marginTop: 40,
  },
  touchableStyle: {
    width: 85,
    height: 50,
    backgroundColor: '#bfdbfe',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    padding: 10,
    marginRight: 8,
    marginTop: 10,

  },
  


});
