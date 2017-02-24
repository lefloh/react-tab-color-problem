import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

const TabNav = TabNavigator({
  Tab1: {
     screen: () => (<Text>Tab1</Text>)
  },
  Tab2: {
    screen: () => (<Text>Tab2</Text>)
  },
  Stack: {
    screen: StackNavigator({
      Stack1: {
        screen: () => (<Text>Stack</Text>)  
      },
    })
  },
});

export default class ReactTabColorProblem extends React.Component {
  render() {
    return (<TabNav />);
  }
}

AppRegistry.registerComponent('ReactTabColorProblem', () => ReactTabColorProblem);
