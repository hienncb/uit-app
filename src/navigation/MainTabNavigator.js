import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import colors from '../components/Common/Colors';
import { APPBAR_HEIGHT } from '../components/Common/Dimension';
import MenuScreen from '../screens/MenuScreen';
import TKB from '../components/TestSchedule/TKB';
import schedule from '../components/schedule/schedule';
import deadline from '../components/deadline/deadline';
import eschedule from '../components/eschedule/eschedule';


// const ServicesStack = createStackNavigator(
//   {
//     Services: ServicesScreen,
//   },

// );

// ServicesStack.navigationOptions = {
//   tabBarLabel: 'Dịch vụ',
//   tabBarOptions: {
//     activeTintColor: colors.green,
//     labelStyle: {
//       paddingBottom: Platform.OS === 'ios' ? screenWidth / 41.4 : screenWidth / 80,
//     },
//     style: {
//       borderTopColor: colors.white,
//       height: Platform.OS === 'ios' ? screenWidth / 7.52 : screenWidth / 7.2,
//     },
//   },
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
//   ),
// };

// const ServicesStack = createStackNavigator(
//   {
//     Services: ServicesScreen,
//   },

// );

// ServicesStack.navigationOptions = {
//   tabBarLabel: 'Dịch vụ',
//   tabBarOptions: {
//     activeTintColor: colors.green,
//     labelStyle: {
//       paddingBottom: Platform.OS === 'ios' ? screenWidth / 41.4 : screenWidth / 80,
//     },
//     style: {
//       borderTopColor: colors.white,
//       height: Platform.OS === 'ios' ? screenWidth / 7.52 : screenWidth / 7.2,
//     },
//   },
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
//   ),
// };



const MainNavigator = createStackNavigator({
  
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      title: 'Menu',
      header:null,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.blue,
        elevation: 0,
        height: APPBAR_HEIGHT,
      },
      headerTitleStyle: {
      },
    }
  },
  TKB: {
    screen: TKB,
    navigationOptions: {
      title: 'TKB',
      //header:null,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.blue,
        elevation: 0,
        height: APPBAR_HEIGHT,
      },
      headerTitleStyle: {
      },
    }
  },

  schedule: {
    screen: schedule,
    navigationOptions: {
      title: 'Thông tin lịch thi',
      //header:null,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.blue,
        elevation: 0,
        height: APPBAR_HEIGHT,
      },
      headerTitleStyle: {
      },
    }
  },

  eschedule: {
    screen: eschedule,
    navigationOptions: {
      title: 'Thông tin lịch thi',
      //header:null,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.blue,
        elevation: 0,
        height: APPBAR_HEIGHT,
      },
      headerTitleStyle: {
      },
    }
  },

  deadline: {
    screen: deadline,
    navigationOptions: {
      title: 'Deadline',
      //header:null,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.blue,
        elevation: 0,
        height: APPBAR_HEIGHT,
      },
      headerTitleStyle: {
      },
    }
  },

});


const tabNavigator = createAppContainer(
  MainNavigator
);
export default tabNavigator;
