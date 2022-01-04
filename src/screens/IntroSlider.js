import React from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomButton from "../components/CustomButton";

const blankData = ['1','2','3']

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
    },
    img:{
        marginTop:45,
        width:200,
        height:300,
        resizeMode:'contain'
    },
    container:{
        flex: 1,
        backgroundColor:'#e7ded7',
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    header: {
        marginTop:50,
        fontSize: 45,
        fontWeight: 'bold',
        textAlign:'center',
        color:'black'
    },
    paragraph: {
        fontSize: 16,
        textAlign:'center',
        marginTop:15,
    },
    labelView:{
        fontSize: 17,
        color:'white'
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 70,
        left: 16,
        right: 16,
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        opacity: 0.2,
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor: 'black'
    },
    activeDot: {
        opacity: 1,
        borderRadius: 5,
        width: 24,
        height: 8,
        marginHorizontal: 4,
        backgroundColor: 'black'
    },

});


const IntroSlider =({navigation})=> {
    const renderItem = ({ item,index }) => {
        return (
            <View style={styles.slide}>
                    <Text style={styles.header}>{"Your Fragrance Message"}</Text>
                    <Text style={styles.paragraph}>{"Formulated according to your wishes"}</Text>
                    <Image
                        style={styles.img}
                        source={require('../logo/perfume.png')}/>
            </View>
        );
    }
    const keyExtractor = (item) => item.title;


    let slider = undefined;


    const  renderPagination = (activeIndex: number) => {
        return (
            <View style={styles.paginationContainer}>
                <SafeAreaView>
                    <View style={styles.paginationDots}>
                        {blankData.length > 1 &&
                            blankData.map((_, i) => (
                                <View
                                    key={i}
                                    style={i === activeIndex ? styles.activeDot : styles.dot}
                                />
                            ))}
                    </View>
                    <CustomButton onPress={()=>navigation.navigate('home')} title={'Login'}/>
                </SafeAreaView>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={keyExtractor}
                dotClickEnabled={false}
                renderPagination = {renderPagination}
                renderItem={renderItem}
                data={blankData}
                ref={(ref) => (slider = ref)}
            />

        </View>
    );
}

export default IntroSlider




