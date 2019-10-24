import React, {Component} from 'react';
import { Text, View, StyleSheet, Image ,Dimensions, TouchableOpacity, FlatList, } from 'react-native';
import { connect } from 'react-redux';
import { datas } from './titleButton';

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

  render() {
   
    const mssv = this.props.navigation.getParam('mssv','16520364');
    return (
      <View style={styles.backgroud}>
        <View style={{flexDirection:'row', marginTop: 35, marginHorizontal: 10}}>
          <Image
            style={{width: 60, height: 60, borderRadius:100, marginRight: 5}}
            source={require('../../../assets/avata/avata.jpg')}/>
        <View>
            <Text style={{flex:1, paddingTop: 5}}>{mssv}</Text>
            <Text style={{flex:1, marginBottom: 5}}>Nguyễn Công Hiển</Text>
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
                 this.props.navigation.navigate('schedule');
                
               }
               else if(item.id === '4'){
                this.props.navigation.navigate('deadline');
               }
              else{
                alert('chức năng đang phát triển');
                console.log('flag menu: ', this.props.flag)
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
      flag: state.accountReducer.flag,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    // getAccount: (data) => {
    //   dispatch(responseLogin(data));
    // }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(menu)