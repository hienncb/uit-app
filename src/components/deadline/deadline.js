import React, {Component} from 'react';
import { Text, View, StyleSheet, Image ,Dimensions, ActivityIndicator, FlatList, } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Card } from "native-base";

const { width } = Dimensions.get('window');


class deadline extends Component {  
  constructor(props){
    super(props);
  
  }
  
  componentDidUpdate(){

  }

  state={
    color:'#3399FF'
}



// tạo arr object
xlarr = () => {
  const getDeadline = this.props.deadlineReducer;
  const datas = Object.values( getDeadline );
  let i = 0;
  let numbers = [];
  while (i < (datas.length/3)) {
    const obj = {
      'date':datas[i], 
      'subjects':(datas[(datas.length/3) + i]).split(' - ')[0], 
      'code': (datas[(datas.length/3) + i]).split(' - ')[1],
      'describe': datas[(datas.length/3)*2 + i],
      'id': i
      };
    //console.log(i, obj)
    numbers.push(obj)
    i++
  }
  if(numbers.length!=0){
    return numbers;
  }
}

  render() {
    const colorIcon = 'black';
    // const setColor = (index) => {
    //   if(index === 'Chưa nộp bài') return 'red';
    //   else return '#3399FF'
    // };
    const data = this.xlarr();
    return (
      !data?  <ActivityIndicator style={styles.loading} animating={true} size="small" color={'blue'} /> :
      <View style={styles.backgroud}>
        <FlatList data={data}
          renderItem={({ item }) => (
            <View style={{marginHorizontal: 5}}>
            <Card>
              <View style={{margin: 7}}>
                <Text numberOfLines={1}> { item.subjects}</Text>

                <View style ={{flexDirection: 'row', margin: 5, flex: 1}}>
                  <Icon
                      name="code"
                      color={colorIcon}
                      size={15}/>
                  <Text style={styles.marginText}> Mã môn: {item.code}</Text>
                </View>

                <View style ={{flexDirection: 'row', margin: 5, flex: 1}}>
                  <Icon
                      name="note"
                      color={colorIcon}
                      size={15}/>
                  <Text style={styles.marginText}> Mô tả: {item.describe}</Text>
                </View>
              
                <View style ={{flexDirection: 'row', margin: 5, flex: 1}}>
                  <Icon
                      name="av-timer"
                      color={colorIcon}
                      size={15}/>
                   <Text style={styles.marginText}> Hạn: {item.date}</Text>
                </View>
              </View>
            </Card>
          </View>)}
            keyExtractor={item => item.id.toString()}/>
      </View>
    );
  }
}




const mapStateToProps = state => {
  return {
    deadlineReducer: state.deadlineReducer
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    // getDeadline: (data) => {
    //   dispatch(responseDeadline(data));
    //}
  }
}


const styles = StyleSheet.create({
//   backgroud:{ 
//     flex: 1,
//     backgroundColor: "#3399FF"
//   },
  backgroud:{ 
    flex: 1,
    backgroundColor: "#eae9ef"
  },
  marginText: {
    marginTop: -2,
    paddingRight: 4
  },
  loading:{ 
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(deadline)