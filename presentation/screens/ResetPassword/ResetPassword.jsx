import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Button, Icon, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const ResetPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`p-5 bg-white`}>
      <TouchableOpacity>
        <View style={tw`h-75 p-5 flex items-center`}>
          <Image
            style={{
              width: 250,
              height: 250,
              resizeMode: "cover",
            }}
            source={require("../../../assets/img/reset.png")}
          />
        </View>
        <View style={tw`h-1/1`}>
          <Text style={styles.text}>Reset Password</Text>
          <View>
            <Input
              placeholder="Password"
              leftIcon={
                <Icon name="lock" type="fontawesome" size={24} color="black" />
              }
            />
            <Input
              placeholder="Confirm Password"
              leftIcon={
                <Icon name="lock" type="fontawesome" size={24} color="black" />
              }
            />
          </View>
          <View style={tw`mt-10`}>
            <Button
              title="Reset"
              onPress={() => navigation.navigate("ResetPassword")}
            />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 15,
  },
  grayBorder: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
  },
});
