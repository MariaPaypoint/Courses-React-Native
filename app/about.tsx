import { Text, View, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function About() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>This is the About page</Text>
        <Pressable
          onPress={() => router.back()}
          style={{
            marginTop: 20,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text>Go back</Text>
        </Pressable>
      </View>
    </>
  );
}
