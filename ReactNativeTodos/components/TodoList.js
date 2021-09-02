import React from 'react';
import { 
  StyleSheet, 
  Text, 
  ScrollView, 
} from 'react-native';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text>TodoList</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center', 
  }, 
});

export default TodoList;