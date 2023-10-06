import { useState } from "react";
import GoalInput from "./components/GoalInput";
import { Button, StyleSheet, View, FlatList } from "react-native";

import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [ModalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(courseGoals.filter((item) => item.id !== id));
  }

  return (
    <>
      <StatusBar style="dark"/>
      <View style={styles.appContainer}>
        <Button
          title="add new goal"
          color="#5e0acc"
          onPress={() => setModalIsVisible(!ModalIsVisible)}
        />
        <GoalInput
          visible={ModalIsVisible}
          onAddGoal={addGoalHandler}
          onGoalInput={goalInputHandler}
          enteredGoalText={enteredGoalText}
          setVisible={setModalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
