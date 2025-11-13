import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter()

 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit apasdfasdfp/index.tsx to edit this screen.</Text>
      <Link href='/login'><Text>navigate to logind</Text></Link>
    </View>
  );
}
