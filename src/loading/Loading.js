import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';


const { width } = Dimensions.get('window');


class Loading extends Component {  

  async componentDidUpdate() {
    const data = await this.props.flag;
    console.log('gfdsf',this.props.accountReducer);
      setTimeout(() => {
     
      console.log(data)
        if (data === false) {
          this.props.navigation.navigate('Login', {check: 1});
        }
        else if(data === true){
          this.props.navigation.navigate('Menu');
        }
        else{

        }
    }, 1000);
  }
  
    render(){
     // console.log('dsadsadasdas',this.props.accountReducer)

      //const isLoading = this.props.navigation.getParam('loading', false)
      //console.log(isLoading)
    return (
      <View style={styles.viewStyles}>
        <Image
          style={{ width: 130, height: 155 }}
          source={require('../../assets/logo/UIT.png')} />
        <View style={styles.indicator}>
          <ActivityIndicator animating={true} size="small" color={'blue'} />
        </View>
      </View>
    )
    }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  indicator: {
    paddingTop: width/7.2,
    justifyContent: "center",
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
    return {
        flag: state.accountReducer.flag,
        accountReducer: state.accountReducer,
    }
  }
  const mapDispatchToProps = (dispatch, props) => {
    return  {

        }  
    }

export default connect(mapStateToProps, mapDispatchToProps)(Loading);