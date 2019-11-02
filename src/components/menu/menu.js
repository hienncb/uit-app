import React, {Component} from 'react';
import { Text, View, StyleSheet, Image ,Dimensions, TouchableOpacity, FlatList, } from 'react-native';
import { connect } from 'react-redux';
import { datas } from './titleButton';
import { responseEschedule, responseLogin, responseDeadline } from '../../actions/action';


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

clickEschedule(){
  
    const student_id = this.props.student_id;
    this.props.getEschedule(student_id);
    this.props.navigation.navigate('eschedule');
  
}


  render() {
   //console.log(this.props.student_id)
   /// const mssv = this.props.navigation.getParam('mssv','16520364');
    return (
      <View style={styles.backgroud}>
        <View style={{flexDirection:'row', marginTop: 35, marginHorizontal: 10}}>
          <Image
            style={{width: 60, height: 60, borderRadius:100, marginRight: 5}}
            source={require('../../../assets/avata/avata.jpg')}/>
        <View>
            <Text style={{flex:1, marginTop: 20}}>{this.props.student_id}</Text>
            {/* <Text style={{flex:1, marginBottom: 5}}>Nguyễn Công Hiển</Text> */}
        </View>
        </View>
        <FlatList data={this.state.title}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>{
              if(item.id === '2'){
                this.props.navigation.navigate('TKB');
              }
              else if(item.id === '3'){
                const student_id = this.props.student_id;
                this.props.getEschedule(student_id);
                this.props.navigation.navigate('eschedule');
                // this.clickEschedule();
               }
               else if(item.id === '4'){
                const data = {username: this.props.student_id, password: this.props.password} ; 
                this.props.getDeadline(data);
                this.props.navigation.navigate('deadline');
               }

               else if(item.id === '5'){
                const data = {username: this.props.student_id, password: "logout"} ; 
                this.props.navigation.navigate('Login', {check: 2});
               }

              else{
                alert('chức năng đang phát triển');
                //console.log('flag menu: ', this.props.flag)
              }
             
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
      password: state.accountReducer.password
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(menu)