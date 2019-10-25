import React, {Component} from 'react';
import { Text, View, StyleSheet, Image ,Dimensions, TouchableOpacity, FlatList, } from 'react-native';
import {  SearchBar, Icon } from 'react-native-elements';
import styled from 'styled-components';
import {BoxShadow} from 'react-native-shadow'
import { responseEschedule } from '../../actions/action';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
//const data12 = { data:{username: '16520364', password: '1472528310'} };

class eschedule extends Component {  
  constructor(props){
    super(props);
    
  }
  
  state={
    data:this.props.getEschedule,
    color:'#3399FF'
}


componentDidMount() {
}

  render() {
    let eschedule = this.props.getEschedule;
    //console.log(eschedule)
    let sortedCars = eschedule.sort((a, b) => Date.parse(new Date(a.room.day.split("/").reverse().join("-"))) - Date.parse(new Date(b.room.day.split("/").reverse().join("-"))));
    console.log("sort", sortedCars);
    const colorIcon = 'black';
    const setColor = (index) => {
      if(index === 'Chưa nộp bài') return 'red';
      else return '#3399FF'
    };


    const shadowOpt = {
      width: 100,
      height: 100,
      color: "#000",
      border: 2,
      radius: 50,
      opacity: 0.8,
      x: 3,
      y: 3,
      //style: { marginVertical: 5 }
    }
  
    return (
      <View style={styles.backgroud}>
        <FlatList data={eschedule}
          renderItem={({ item }) => (
              <View style={styles.shadow}>
                <View style={{margin: 7}}>
                  <Text> Mã môn học: {item.name_student}</Text>
                  <Text> Tên môn học: {item.room.name_subject}</Text>
                      <View style ={{flexDirection: 'row', margin: 5, flex: 1}}>
                          <Icon
                              name="today"
                              color={colorIcon}
                              size={15}/>
                          <Text> phòng: {item.room.room}</Text>
                      </View>

                      <View style ={{flexDirection: 'row', margin: 5, flex: 1}}>
                          <Icon
                              name="av-timer"
                              color={colorIcon}
                              size={15}/>
                          <Text>ngày: {item.room.day}</Text>
                      </View>
                  
                      <View style ={{flexDirection: 'row', margin: 5, flex: 1}}>
                          <Icon
                              name="rowing"
                              color={colorIcon}
                              size={15}/>
                          <Text > {item.submit}</Text>
                      </View>
                </View>
                <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', padding: 5, borderRadius: 2}} onPress={()=>{
              
                }}>
                  {/* <Text style = {{backgroundColor: setColor(item.submit),  borderRadius: 2}}>Xem Thêm</Text> */}
                </TouchableOpacity>
            
              </View>
              )}
            keyExtractor={item => item._id}/>
      </View>
    );
  }
}




const mapStateToProps = state => {
  return {
    getEschedule: state.escheduleReducer.data
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    // getEschedule: (data) => {
    //   dispatch(responseEschedule(data));
    // }
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
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  shadow: {   
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
}
})

export default connect(mapStateToProps, mapDispatchToProps)(eschedule)