import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {storeColors} from "../theme"


const catagories = ["Action", "Family", "Puzzle", "Adventure", "Racing"]

export default function Index() {
  return (
    <LinearGradient
      colors={['#6278a9ff', '#37579bff', '#132863ff']}
      style={styles.gradientBox}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>Browse Games</Text>
          </View>
          <View style={{paddingLeft: 16}}>
            <ScrollView horizontal>
              {
                catagories.map(cat => {
                  return(
                    <TouchableOpacity
                    key={cat}
                    style={styles.touchableStyle}>
                      <Text>
                         {cat}
                      </Text>
                    </TouchableOpacity>
                  )
                }

                )
              }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // 👈 Important for full-screen gradient
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
  headingText: {
    marginLeft: 16,
    fontSize: 28,
    fontWeight: 'bold',
    color: storeColors.text, 
  },
  textContainer: {
    marginTop: 40,
  },
  touchableStyle:{
    padding: 30,
    backgroundColor: '#bfdbfe',
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 9999, 
  }
});
