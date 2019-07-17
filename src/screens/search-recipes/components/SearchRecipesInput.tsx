import React from 'react';
import { Dispatch } from 'redux';
import {
  Button,
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import { Styles } from './styles';

// Props types
interface Props {
  onSearchRecipes: (searchValue: string, nextPage?: number | undefined) => Dispatch
}

// State types
interface State {
  value: string
  isActive: boolean
}
export class SearchRecipesInput extends React.PureComponent<Props, State> {
  searchInputRef = React.createRef();
  state = {
    value: '',
    isActive: false,
  }

  // set new data to isActive state
  onChangeActiveState = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  // when input on Focus, method will call onChangeActiveState
  onInputFocus = () => {
    this.onChangeActiveState();
  }

  // when input on Blur, method will call onChangeActiveState
  onInputBlur = () => {
    this.onChangeActiveState();
  }

  // change value state when you change text on TextInput
  onInputTextChanged = (textValue: string) => {
    this.setState({
      value: textValue,
    });
  }

  // submit search value
  onSubmitInput = () => {
    const {
      onSearchRecipes,
    } = this.props;

    onSearchRecipes(this.state.value);
    Keyboard.dismiss();
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
          inputRef={this.searchInputRef}
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
