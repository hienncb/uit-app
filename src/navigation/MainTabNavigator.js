import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import colors from '../components/Common/Colors';
import { APPBAR_HEIGHT } from '../components/Common/Dimension';
import MenuScreen from '../screens/MenuScreen';
import TKB from '../components/TestSchedule/TKB';
import schedule from '../components/schedule/schedule';
import deadline from '../components/deadline/deadline';
// import daa from '../components/daaInformation/Daa';
import eschedule from '../components/eschedule/eschedule';
import ratting from '../components/rating/rating';
import group from '../components/chatting/group';
import chat from '../components/chatting/chatting';
import CreateGroup from '../components/chatting/creategroup';
import listFriend from '../components/chatting/listFriend';

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
      title: 'Thời khóa biểu',
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

  // Daa: {
  //   screen: daa,
  //   navigationOptions: {
  //     title: 'Thông tin daa',
  //     //header:null,
  //     headerTintColor: colors.white,
  //     headerStyle: {
  //       backgroundColor: colors.blue,
  //       elevation: 0,
  //       height: APPBAR_HEIGHT,
  //     },
  //     headerTitleStyle: {
  //     },
  //   }
  // },

  eschedule: {
    screen: eschedule,
    navigationOptions: {
      title: 'Lịch thi',
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

  Rating: {
    screen: ratting,
    navigationOptions: {
      title: 'Đánh giá app',
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

  Group: {
    screen: group,
    navigationOptions: {
      title: 'Chatting',
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



  CreateGroup: {
    screen: CreateGroup,
    navigationOptions: {
      title: 'Create group',
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
  chat: {
    screen: chat,
    navigationOptions: {
      title: 'Chatting',
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

  listFriend:{
    screen: listFriend,
    navigationOptions: {
      title: 'Chatting',
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
