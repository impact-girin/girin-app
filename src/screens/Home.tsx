import CustomModal from "@/components/CustomModal";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export function HomeScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="fadas" onPress={() => setIsOpen(true)} />
      <CustomModal IsOpen={isOpen} setIsOpen={setIsOpen}>
        <Button title="fdafs" />
      </CustomModal>
    </View>
  );
}
