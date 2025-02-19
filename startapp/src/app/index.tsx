import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { router } from 'expo-router';


export default function Index() {
  const [name, setName] = useState("")

  function handleNext() {
    router.navigate("./home")
  }

  return (
    // <View style={{ borderColor: "red", fontSize: 24}}>
    // <View style={styles.title}>
    <View>
      <Text>Olá! {name}</Text>

      <Input onChangeText={setName}/>
      <Button title="Entrar" onPress={handleNext}/>
    </View>
  );
}

// Usar styles
const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
  }
})