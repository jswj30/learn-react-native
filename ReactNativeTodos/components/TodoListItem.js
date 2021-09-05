import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({id, textValue, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={30} color="#3143e8" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        {/* 이건 왜 안되지??? */}
        {/* <Text style={styles.buttonText} onPress={() => onRemove(id)}> */}
        <Text style={styles.buttonText} onPress={onRemove(id)}>
          <Icon name="delete" size={30} color="#e33057" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    // width: '30rem',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  completeCircle: {
    marginLeft: 20,
    marginRight: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
