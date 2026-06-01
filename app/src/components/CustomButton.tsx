import { TouchableOpacity, Text, StyleSheet } from "react-native";

type props = {
  title: string;
  onpress: () =>void;
};

export default function CustomButton({ title, onpress }: props) {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
