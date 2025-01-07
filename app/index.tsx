import { Text, View, Pressable, ImageBackground } from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("../assets/images/hello-bg.png")}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Edit app/index.tsx to edit this screen.</Text>
          <Link href="/about" asChild>
            <Pressable
              style={{
                marginTop: 20,
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>About</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </>
  );
}
