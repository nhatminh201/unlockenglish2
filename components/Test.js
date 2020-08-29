import React from 'react';
import {SafeAreaView,Text,Image,Dimensions,TouchableOpacity,StyleSheet, View, FlatList} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Test extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList 
                    // data={people}
                    // renderItem={({item}) => (
                    //     <Text>{item.name}</Text>
                    // )}
                    data={DATA}
                    renderItem={({item}) => (
                        
                    <TouchableOpacity >
                        {item.onTop ?
                        <View style={styles.panel}>
                            <Image style={styles.image} source={item.image}></Image>
                            <Text style={styles.infoStyle}>
                                {item.title}
                            </Text>
                        </View>
                        :
                        <View style={styles.panelB}>
                            <Image style={styles.imageB} source={item.image}></Image>
                            <Text style={styles.infoStyleB}>
                                {item.title}
                            </Text>
                        </View>
                        }
                    </TouchableOpacity>
                    )}
                    //keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const DATA = [
    {
      image: require('./1.jpg'),
      title: 'First Title',
      info: '1Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: true,
    },
    {
      image: require('./2.jpeg'),
      title: 'Second Title',
      info: '2Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
    {
      image: require('./3.jpg'),
      title: 'Third Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
    {
      image: require('./3.jpg'),
      title: 'Third Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
    {
      image: require('./3.jpg'),
      title: 'Third Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      onTop: false,
    },
];
// const Item = ({ title, info }) => (
//     <View style={styles.item}>
//       <Text style={styles.titleStyle}>{title}</Text>
//       <Text style={styles.titleStyle}>{info}</Text>
//     </View>
//   );

// const renderTitle = ({ item }) => (
//     <Item title={item.title} />  
// );
// const renderInfo = ({ item }) => (
//     <Item info={item.info} />  
// );
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
    },
    image:{
        alignSelf: 'center',
        width: 350,
        height: 200,
        borderRadius: 5,
    },
    imageB:{
        alignSelf: 'flex-start',
        width: 120,
        height: 100,
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
    panelB:{
        width: 350,
        height: 100,
        flexDirection:'row',
        alignItems: 'flex-start',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
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
    infoStyleB:{
        width: 350,
        marginStart: 10,
        marginEnd: 10,
        marginTop: 10,
        marginBottom: 20,
        color: 'black',
        fontSize: 12,
    },
});