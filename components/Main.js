import React from 'react';
import {SafeAreaView,Text,Dimensions,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Main extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'#ffffff'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Screen_Feed")}>
                    <Text style={{color:'blue'}}>
                        Bản tin
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Screen_Notification")}>
                    <Text style={{color:'blue'}}>
                        Thông báo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Screen_Test")}>
                    <Text style={{color:'blue'}}>
                        Test
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}