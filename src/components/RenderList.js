import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const renderProduct = () => {
    return (
        <View style={styles.slide}>
            <Image
                style={styles.img}
                source={require('../logo/perfume.png')}/>
            <Text numberOfLines = {1} style={styles.label}>{"Fragrance Message"}</Text>
            <Text style={styles.darkLabel}>{"$16.00"}</Text>
        </View>
    );
}

const renderCategory = ({ item,index }) => {
    return (
        <View style={styles.slideCategory}>
            <View style={styles.catContainerLab}>
                <Text style={styles.catLabel}>{'🌹'}</Text>
            </View>

            <View>
                <Text numberOfLines = {1} style={styles.darkLabel}>{"Rose"}</Text>
                <Text>{"11 Nov"}</Text>
            </View>

        </View>
    );
}
const RenderList=({listType})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{listType === 'product'? 'Categories':'Special Offers'}</Text>
            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={['1','2','3','4']}
                renderItem={item => listType === 'product' ? renderProduct(item): renderCategory(item)}
                keyExtractor={photo => photo.id}
            />
        </View>

    );
}

export default RenderList


const styles = StyleSheet.create({
    label:{
        marginTop:25,
        marginBottom:5,
        fontSize: 17,
        color:'grey',
        textDecorationStyle:'dotted',
    },
    darkLabel:{
        fontSize: 17,
        fontWeight:'bold',
        color:'black',
    },
    catLabel:{
        fontSize: 35,
        alignSelf:"center",
    },
    catContainerLab:{
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        width:60,
        height:60,
        padding:5,
        borderRadius:20,
        marginRight:10,
    },
    img:{
        marginTop:45,
        width: 80,
        height: 80,
        resizeMode:'contain',
        alignSelf:'center'
    },
    slide: {
        width: 150,
        backgroundColor:'white',
        marginHorizontal:15,
        borderRadius:20,
        padding:15
    },
    header:{
        fontSize: 17,
        fontWeight:'bold',
        color:'black',
        marginVertical:20
    },
    container:{
        paddingHorizontal:15
    },
    slideCategory: {
        alignItems:"center",
        width: 150,
        flexDirection:'row',
        backgroundColor:'white',
        marginHorizontal:15,
        borderRadius:20,
        padding:15
    },
});

