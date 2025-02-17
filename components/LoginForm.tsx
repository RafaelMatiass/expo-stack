// import { Eye } from 'lucide-react-native';
import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, Button } from 'react-native';

export default function LoginForm() {
  return (
    <View className="">
      <View className="mb-3">
        <Text className="text-base font-bold mx-2">Email</Text>
        <View className="flex align-items-center justify-center pl-5 w-full h-12 border-black border-2 rounded-lg">
          <TextInput
            className="text-black w-ful"
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
        </View>
      </View>

      <View className="mb-3">
        <Text className="text-base font-bold mx-2">Password</Text>

        <View className="flex align-items-center justify-center pl-5 w-full h-12 border-black border-2 rounded-lg">
          <TextInput className="text-black w-full" placeholder="Digite sua senha" />

          {/* <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            className="absolute right-4">
            {isPasswordShown == true ? (
                <Eye /> name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
          </TouchableOpacity> */}
        </View>

        <Button
          title="Login"
          // filled
        />

        <View className="flex flex-row align-items-center justify-center my-5">
          <View className="flex-1 h-1 bg-green-500 mx-4" />
          <Text className="text-sm">Ou faça login com</Text>
          <View className="flex-1 h-1 bg-green-500 mx-4" />
        </View>
      </View>

      <View className="flex flex-row justify-center">
        <TouchableOpacity
          onPress={() => console.log('Pressed')}
          className="flex-1 flex-row items-center justify-center h-12 rounded-lg">
          <Image
            source={require('../assets/google.png')}
            style={{
              height: 36,
              width: 36,
              marginRight: 8,
            }}
            resizeMode="contain"
          />

          <Image
            source={require('../assets/github.png')}
            style={{
              height: 36,
              width: 36,
              marginRight: 8,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View className="flex items-center justify-center my-6">
        <Text className="text-black">Não possui uma conta? </Text>
        <Text className="text-gray-800 ml-1 font-bold">Cadastre-se</Text>
      </View>
    </View>
  );
}
