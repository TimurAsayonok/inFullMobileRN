import React from 'react';
import {
  Button,
  View,
  TextInput
} from 'react-native';
import { Styles } from './styles';


export class SearchRecipesInput extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  state = {
    value: '',
    isActive: false
  }

  render() {
    const { onSearchResipes } = this.props;
    const { value } = this.state;

    console.log(this.props);
    return (
      <View style={Styles.searchInputContainer}>
        <TextInput
          style={[Styles.searchInput, Styles.active]}
          placeholder="Type indredients"
        />
        <Button
          color="#40C268"
          title="Go"
          onPress={() => onSearchResipes(value)}
        />
      </View>
    );
  }
}