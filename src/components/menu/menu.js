import React, {Component} from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image ,
  Dimensions,
  TouchableOpacity,
  FlatList,
 } from 'react-native';
import { connect } from 'react-redux';
import { datas } from './titleButton';
import { 
  responseEschedule, 
  responseLogin,
  responseDeadline,
  responseDaaCroom,
  responseCompensatory,
  responseResComment,
  responseChatreal,
  getDataFromCreategroup,
  responseSchedule} from '../../actions/action';


const { width } = Dimensions.get('window');

 class menu extends Component {  
  constructor(props){
    super(props);
  }
  
  state={
      title:datas
  }

  OnPressButton = item =>{
    
  }

  componentWillReceiveProps(){
    

  }

 
  
componentDidUpdate(){
  // if(this.props.flag.flag)
  // console.log(this.props.flag.flag === true);
}

// clickEschedule(){
  
//     const student_id = this.props.student_id;
//     this.props.getEschedule(student_id);
//     this.props.navigation.navigate('eschedule');
  
// }

setClickTranslate(index){
  if(index === '0'){
    const student_id = this.props.student_id;
    this.props.getCompensatory(student_id);
    this.props.getCroom(student_id);
    this.props.navigation.navigate('Daa');

  }
  else if(index === '2'){
    // const data = {student_id: this.props.student_id};
    // this.props.getSchedule(data);
    this.props.navigation.navigate('schedule');
  }
  else if(index === '3'){
    const student_id = this.props.student_id;
    this.props.getEschedule(student_id);
    this.props.navigation.navigate('eschedule');
    // this.clickEschedule();
   }
   else if(index === '4'){
    // const data = {username: this.props.student_id, password: this.props.password, jar: this.props.jar} ; 
    //console.log("@@@@@",this.props.jar)
    const data=this.props.jar;
    this.props.getDeadline(data);
    this.props.navigation.navigate('deadline');
   }

   else if(index === '5'){
    const data = {username: this.props.student_id, password: "logout"} ; 
    this.props.navigation.navigate('Login', {check: 2});
   }
   else if(index === '6'){
    this.props.getResComment();
    this.props.navigation.navigate('Rating');
  }

  else if(index === '7'){
    this.props.getData();
    this.props.navigation.navigate('Group');
  }

  // else if(index === '6'){
  //   this.props.navigation.navigate('Rating');
  // }

  else{
    alert('chức năng đang phát triển');
    //console.log('flag menu: ', this.props.flag)
  }
}

  render() {
   //console.log(this.props.student_id)
   /// const mssv = this.props.navigation.getParam('mssv','16520364');
   const Name = this.props.name;
   const img = this.props.image;
    return (
      <View style={styles.backgroud}>
        <View style={{flexDirection:'row', marginTop: 35, marginHorizontal: 10}}>
          <Image
            style={{width: 60, height: 60, borderRadius:100, marginRight: 5}}
            source={{uri: img}}/>
        <View>
            <Text style={{marginTop: 8}}>{this.props.student_id}</Text>
            <Text style={{marginTop: -1}}>{Name}</Text> 
        </View>
        </View>
        <FlatList data={this.state.title}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>{
              this.setClickTranslate(item.id)
            }}>
              <View style={styles.itemViewStyles}>
                <Text> {item.title}</Text>
                </View>
              </TouchableOpacity>)}
          keyExtractor={item => item.id.toString()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroud:{ 
    flex: 1,
    backgroundColor: "#3399FF"
  },
  itemViewStyles:{ 
    justifyContent: 'center',
    alignItems: 'center',
    height: width/4,
    width: (width-40)/2,
    margin: 10, 
    backgroundColor: 'white', 
    borderRadius: 7 
  }
})

const mapStateToProps = state => {
  return {
      student_id: state.accountReducer.username,
      password: state.accountReducer.password,
      name: state.accountReducer.name,
      image: state.accountReducer.image,
      jar: state.accountReducer,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getEschedule: (data) => {
      dispatch(responseEschedule(data));
    },
    getAccount: (data) => {
      dispatch(responseLogin(data));
    },
    getDeadline: (data) =>{
      dispatch(responseDeadline(data));
    },
    getCroom: (daa)=>{
      dispatch(responseDaaCroom(daa));
    
    },
    // getSchedule: (data) => {
    //   dispatch(responseSchedule(data));
    // },
    getChatreal: (daa)=>{
      dispatch(responseChatreal(daa))
    },
    getResComment: (daa)=>{
      dispatch(responseResComment(daa))
    },
    getCompensatory: (daa)=>{
      dispatch(responseCompensatory(daa))
    },
    getData: () => {
      dispatch(getDataFromCreategroup());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(menu)