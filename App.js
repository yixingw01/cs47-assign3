import { StyleSheet, SafeAreaView, Text, View, Image, FlatList, Pressable} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Song from "./app/components/Song"
import images from "./assets/Images/images";

const AuthButton = ({authFunction}) => {
  return (
    <Pressable title="Auth" onPress={authFunction}>
    <View style={styles.authButton}>
      <Image style={styles.authImage} source={images.spotify} />
      <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
    </View>
    </Pressable>
  )
};


const List = ({tracks}) => {

  const renderSong = ({item, index}) => {
    return(
      <Song item={item} index={index+1} />
    )
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/spotify-logo.png')}/>
        <Text style={styles.headerText}>
          My Top Tracks
        </Text>
      </View>
      <FlatList 
        data={tracks}
        renderItem={(item) => renderSong(item)}
      />
    </View> 
  )
}


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentShown;
  if (token) {
    // render Flatlist
    contentShown = <List tracks={tracks}/>;
  } else {
    // render AuthButton
    contentShown = <AuthButton authFunction={getSpotifyAuth} />;
  }
    

  return (
    <SafeAreaView style={styles.container}>
      {contentShown}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  }, 

  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },

  headerText: {
    color: Themes.colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },

  authButton: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: Themes.colors.spotify,
    width: '50%',
    height: '20%',
    borderRadius: 999,
    marginHorizontal: 30,
  },

  authImage: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },

  authText: {
    color: Themes.colors.white,
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
