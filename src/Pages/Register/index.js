import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo";
import styles from "./styles";
import FormRegister from "../../components/FormRegister";

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <SafeAreaView>
        <FormRegister />
      </SafeAreaView>
    </View>
  )
}