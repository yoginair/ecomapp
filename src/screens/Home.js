import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';
import RenderList from "../components/RenderList";

function Home() {
  const [showConfetti, setShowConfetti] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      {
        showConfetti && <ConfettiCannon
              onAnimationEnd = {
                setTimeout(function(){setShowConfetti(false)}, 3000)
              }
              count={50}
              origin={{x: 0, y: 0}} />
      }
        <View style={styles.slide}>
          <Text style={styles.header}>{"Select Your Favorite Products"}</Text>
          <Text style={styles.paragraph}>{"Find a wide variety of perfume products"}</Text>
        </View>
      <RenderList listType={'category'}/>
      <RenderList listType={'product'}/>
    </SafeAreaView>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex:1,
    padding: 10,
    flexDirection:'column',
    justifyContent: "space-between",
    alignItems:'center'
  },
  header: {
    marginTop:45,
    fontSize: 35,
    textAlign:'center',
    color:'black'
  },
  paragraph: {
    fontSize: 16,
    textAlign:'center',
    marginTop:15,
  },
});
