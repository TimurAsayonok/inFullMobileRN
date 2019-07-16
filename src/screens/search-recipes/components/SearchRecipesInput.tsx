import React from 'react';
import {
  Button,
  View,
  TextInput,
} from 'react-native';
import { Styles } from './styles';

export class SearchRecipesInput extends React.PureComponent {
  state = {
    value: '',
    isActive: false,
  }

  onChangeActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  onInputFocus = () => {
    this.onChangeActive();
  }

  onInputBlur = () => {
    this.onChangeActive();
  }

  onInputTextChanged = (textValue: string) => {
    this.setState({
      value: textValue,
    });
  }

  onSubmitInput = () => {
    const {
      onSearchRecipes,
    } = this.props;

    onSearchRecipes(this.state.value);
  }

  render() {
    const {
      value,
      isActive,
    } = this.state;

    return (
      <View
        style={[
          Styles.searchInputContainer,
          isActive && Styles.active,
        ]}
      >
        <TextInput
          style={Styles.searchInput}
          placeholder="Type ingredients"
          value={value}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          onChangeText={this.onInputTextChanged}
          onSubmitEditing={this.onSubmitInput}
        />
        <Button
          color="#40C268"
          title="Go"
          onPress={this.onSubmitInput}
        />
      </View>
    );
  }
}
