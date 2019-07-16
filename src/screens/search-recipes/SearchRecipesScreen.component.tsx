import React from 'react';
import {
  Button,
  View,
  TextInput
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { SearchRecipesInput } from './components/SearchRecipesInput';
import { Styles } from './styles';


export class SearchRecipesScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      onSearchResipes, recipesData, navigation
    } = this.props;
    const { navigate } = navigation;
    console.log(this.props);
    return (
      <SafeAreaView style={Styles.screenContainer}>
        <SearchRecipesInput
          onSearchResipes={onSearchResipes}
        />
        
        {/* add flatlist */}
      </SafeAreaView>
    );
  }
}
