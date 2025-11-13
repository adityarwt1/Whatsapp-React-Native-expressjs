 import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [error, setError] = useState<string>();

  const handleGoogleSignIN = async() => {
    try {
      const provider  = new GoogleAuthProvider()
      const user = await signInWithPopup(auth, provider)
      console.log(user)
      console.log("button is working");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.centerBox}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIN}
        >
          <Image
            source={{
              uri: "https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png",
            }}
            style={styles.googleLogo}
          />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0B1014",
    height: "100%",
  },

  centerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 4, // Android shadow
  },

  googleIcon: {
    color: "#DB4437", // Google red
    marginRight: 10,
  },

  googleText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});