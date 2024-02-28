import './global.css';

import LoginForm from 'components/LoginForm';
import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex items-center justify-center min-h-screen">
        <View className="">
          <View className="flex flex-col items-center space-y-4 mb-8">
            <Image source={require('./assets/untitled-icon.png')} className="w-24 h-24" />
          </View>
          <LoginForm />
          <Text className="auth-footer text-center mt-8">
            Copyright 2024, Untitled Rights Reserved.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
