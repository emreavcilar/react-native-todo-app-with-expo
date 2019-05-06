import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

import { inputPlaceholder } from '../utils/colors';
const { width } = Dimensions.get('window');

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
    <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={onChangeText}
        placeholder="Type here to add note."
        placeholderTextColor={inputPlaceholder}
        multiline={true}
        autoCapitalize="sentences"
        underlineColorAndroid="transparent"
        selectionColor={'white'}
        maxLength={30}
        returnKeyType="done"
        autoCorrect={false}
        blurOnSubmit={true}
        onSubmitEditing={onDoneAddItem}
    />
);

const styles = StyleSheet.create({
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft:10,
        fontSize: 30,
        color: 'black',
        fontWeight: '500',
        backgroundColor:'white',
        width:width-50,
        borderRadius:5,
    }
});

export default Input;