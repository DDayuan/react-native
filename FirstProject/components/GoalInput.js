import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/favicon.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={props.onGoalInput}
            value={props.enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="add goal"
                onPress={props.onAddGoal}
                color="#b180f0"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancle"
                onPress={() => props.setVisible(false)}
                color="#f31282"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 80,
    height: 80,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4f0ff",
    backgroundColor: "#e4f0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
