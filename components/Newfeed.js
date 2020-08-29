import React from 'react';
import {SafeAreaView,View,Image, Text,Dimensions,TouchableOpacity,StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Newfeed extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.news}>
                    <Image style={styles.image} source={require('./2.jpeg')}>
                    </Image>
                    <Text style={styles.titleStyle}>
                        Title 1
                    </Text>
                    <Text style={styles.infoStyle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
    },
    news:{
        marginTop: 5,
    },
    image:{
        alignSelf: 'center',
        width: 380,
        height: 250,
        borderRadius: 5,
    },
    panel:{
        width: 350,
        flexDirection:'column',
        alignItems: 'flex-start',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    titleStyle:{
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoStyle:{
        width: 350,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 20,
        color: 'black',
        fontSize: 12,
    },
});