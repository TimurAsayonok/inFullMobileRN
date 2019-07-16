import React from "react";
import {
  ScrollView,
  StatusBar,
  Linking,
  ToastAndroid,
} from "react-native";
import {
  SafeAreaView,
  NavigationScreenProp,
} from 'react-navigation';
import { RecipeInfo } from './components/RecipeInfo';
import { Styles } from './styles';

/**
 * RecipeInfoScreen for showing info about recipe
 */
// Props types
interface Props {
  navigation: NavigationScreenProp<any, any>
};

// State types
interface State {
};
export class RecipeInfoScreen extends React.PureComponent<Props, State> {
  // navigation options, styles and ect.
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#40C268',
    },
    headerTintColor: '#fff',
  };

  /**
   * method for opening recipe href url
   * on mobile browser
   */
  onOpenLinck = (url: string): void => {
    Linking.canOpenURL(url).then(supported => {
      // check link for opening
      if (supported) {
        // open link
        Linking.openURL(url);
      } else {
        // show Toast on adroid
        ToastAndroid.showWithGravity(
          `Don't know how to open URL: ${url}`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    });
  }

  render() {
    const { navigation } = this.props;
    const recipe = navigation.state.params.recipe;

    return (
      <SafeAreaView style={Styles.safeAreaViewContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#40C268"
        />
        <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
          <RecipeInfo
            recipe={recipe}
            onOpenLinck={this.onOpenLinck}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
