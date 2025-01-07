import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Stack, useRouter } from "expo-router";

const windowWidth = Dimensions.get("window").width;

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground source={require("@/assets/images/hello-bg.png")} style={styles.bgImage} resizeMode="cover">
        <View style={styles.container}>
          <Image source={require("@/assets/images/logo-for-light.png")} style={styles.logo} resizeMode="contain" />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonMain]} onPress={() => router.push("/about")}>
              <Text style={[styles.text, styles.textMain]}>{"Let's get started"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonAdv]} onPress={() => alert("Pressed!")}>
              <Text style={[styles.text, styles.textAdv]}>{"I already have an account"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  bgImage: {
    flex: 1,
  },
  logo: {
    width: Math.min(windowWidth * 0.5, 300),
    height: 100,
    alignSelf: "center",
    marginTop: 60,
  },
  buttonsContainer: {
    marginBottom: 40,
    marginHorizontal: 24,
    gap: 16,
  },
  button: {
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
  },
  buttonMain: {
    backgroundColor: "white",
  },
  textMain: {
    color: "#1C1F40",
  },
  buttonAdv: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 19,
  },
  textAdv: {
    color: "white",
  },
});
