import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <GameScreen />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BADA55",
    alignItems: "center",
    justifyContent: "center",
  },
});
