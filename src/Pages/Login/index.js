import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo";
import styles from "./styles";
import Form from "../../components/Form";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <SafeAreaView>
        <Form />
      </SafeAreaView>
    </View>
  )
}