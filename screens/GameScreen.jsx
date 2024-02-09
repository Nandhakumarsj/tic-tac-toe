import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePress(i) {
    const nextSquares = squares.slice();
    if (calculateWinner(nextSquares) || nextSquares[i]) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `🎉 ${winner} Wins!🎊`;
  } else {
    status =
      squares.every((elem) => elem !== null) &&
      calculateWinner(squares) === null
        ? "🧠 Draw ! 😇"
        : (xIsNext ? "X" : "O") +
          (squares.every((elem) => elem === null)
            ? " is playing.."
            : " is thinking..");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium">{status}</Text>
      </View>
      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[0]}
            onPress={() => handlePress(0)}
          />
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[1]}
            onPress={() => handlePress(1)}
          />
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[2]}
            onPress={() => handlePress(2)}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[3]}
            onPress={() => handlePress(3)}
          />
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[4]}
            onPress={() => handlePress(4)}
          />
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[5]}
            onPress={() => handlePress(5)}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[6]}
            onPress={() => handlePress(6)}
          />
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[7]}
            onPress={() => handlePress(7)}
          />
          <Button
            mode="outlined"
            style={{
              borderCurve: "circular",
              borderRadius: 6,
              minWidth: 70,
              borderWidth: 2,
              margin: 1,
              borderColor: "#19a",
            }}
            labelStyle={{ color: "#909" }}
            children={squares[8]}
            onPress={() => handlePress(8)}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Button
          children="Reset"
          mode="outlined"
          style={{ minWidth: 150 }}
          onPress={() => setSquares(Array(9).fill(null))}
        />
      </View>
    </View>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 50
  },
  content: {
    marginVertical: 50,
  },
});
