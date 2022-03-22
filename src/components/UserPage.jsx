import { Text, View, Button, Image } from "react-native";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { LoginContext } from "../contexts/LoginContext";
import styles from "../styles/Styles";
import avatar from "../../avatar.jpg";
export default UserPage = () => {
  const { user } = useContext(UserContext);
  const { setLoggedIn } = useContext(LoginContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.avatarUrl}
        source={user.avatarUrl ? { uri: user.avatarUrl } : avatar}
      />
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.userType}>{user.user_type}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Button
        onPress={() => {
          setLoggedIn(false);
        }}
        title="Sign Out"
        color="red"
        accessibilityLabel="Sign out"
      />
    </View>
  );
};
