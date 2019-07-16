import React from 'react';
import {
  Button,
  View,
  TextInput
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Styles } from './styles';


export class SearchRecipesScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <SafeAreaView style={Styles.screenContainer}>
        <View style={Styles.searchInputContainer}>
          <TextInput
            style={Styles.searchInput}
            placeholder="Type indredients"
          />
          <Button
            color="#40C268"
            title="Go"
            onPress={() => navigate('RecipeInfo', { name: 'Jane' })
            }
          />
        </View>
        
        {/* add flatlist */}
      </SafeAreaView>
    );
  }
}
