import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

function Profile({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerRecipient}>Profile</Text>
        <TouchableOpacity style={styles.logout} onPress={() => navigation.popToTop('')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleContainer: {
    padding: 10,
    flexDirection:'row',
    justifyContent: "space-between"
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderBottomWidth:1,
    borderBottomColor:'#19a0a0'
  },
  title: {
    fontSize: 14,
  },
  headerRecipient: {
    fontSize: 24,
    color: 'black',
    alignSelf:'center'
  },
  addRecipient:{
    backgroundColor: '#2ec4b6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    height: 40,
    borderRadius: 3,
  },
  logout:{
    borderColor: '#d28f8f',
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:70,
    height:70,
    borderRadius: 70/2,
  }
});
