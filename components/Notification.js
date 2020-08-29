import React from 'react';
import {SafeAreaView,Text,Image,Dimensions,TouchableOpacity,StyleSheet, View, FlatList} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Notification extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList 
                    data={DATA}
                    renderItem={({item}) => (
                        
                    <TouchableOpacity >
                        <View style={styles.panel}>
                            <Image style={styles.imageB} source={item.image}></Image>
                            <Text style={styles.titleStyle}>
                                {item.title}
                            </Text>
                        </View>
                        <View style={styles.panelB}>
                            <Text style={styles.infoStyle}>
                                {item.info}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    )}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const DATA = [
    {
      image: require('./1.jpg'),
      title: 'Đổi lịch học',
      info: 'Lịch học sáng mai sẽ chuyển vào ... .',
      
    },
    {
      image: require('./2.jpeg'),
      title: 'Đóng học',
      info: 'Chúng ta chuẩn bị vào học kỳ mới ....',
      
    },
    {
      image: require('./3.jpg'),
      title: '3 Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      
    },
    {
      image: require('./3.jpg'),
      title: 'Third Title',
      info: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      
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
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    panel:{
        width: 350,
        height: 40,
        flexDirection:'row',
        alignItems: 'flex-start',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    panelB:{
        width: 330,
        height: 80,
        flexDirection:'column',
        alignItems: 'flex-start',
        marginLeft: 40,
        borderRadius: 5,
        backgroundColor: '#F8F8F8',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1.0
    },
    titleStyle:{
        marginTop: 5,
        marginStart: 12,
        marginEnd: 10,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoStyle:{
        width: 350,
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 20,
        color: 'black',
        fontSize: 14,
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