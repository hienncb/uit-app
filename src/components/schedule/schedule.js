import React, {Component} from 'react';
import { Text, View, StyleSheet, Image ,Dimensions, TouchableOpacity, FlatList, } from 'react-native';
import {data} from './data'


const { width } = Dimensions.get('window');

export default class schedule extends Component {  
  constructor(props){
    super(props);
  }
  
  state={
    datas:data
}


  render() {
    return (
      <View style={styles.backgroud}>
        <FlatList data={this.state.datas}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>{
               
                }}>
                <View>
                    <View style={{margin: 7}}>
                        <Text> Môn học: {item.name}</Text>
                        <Text> Ngày thi: {item.date}</Text>
                        <Text> Ca thi:  {item.time}</Text>
                        <Text> Phòng thi: {item.room}</Text>
                    </View>
                <Text style={styles.line}></Text>
                </View>
                </TouchableOpacity>)}
            keyExtractor={item => item.id.toString()}/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
//   backgroud:{ 
//     flex: 1,
//     backgroundColor: "#3399FF"
//   },
  backgroud:{ 
    flex: 1,
    margin:3,
    backgroundColor: "#fff"
  },
  line:{ 
    flex: 1,
    height:1,
    backgroundColor: "#000"
  }
})