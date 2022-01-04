import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

function Camera({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    );
}

export default Camera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});
