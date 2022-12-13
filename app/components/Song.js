import { StyleSheet, Text, View, Image } from "react-native";
import { Themes } from "../../assets/Themes";
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";


const Song = ({item, index}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.index}> {index} </Text>
            <Image style={styles.image} source = {{uri: item.album.images[0].url}} />
            <View style={styles.nameBox}>
                <Text numberOfLines={1} style={styles.title}> {item.name} </Text>
                <Text numberOfLines={1} style={styles.artist}> {item.artists[0].name} </Text>
            </View>
            <View style={styles.albumBox}>
                <Text numberOfLines={1} style={styles.album}>{item.album.name}</Text>
            </View>
            <Text style={styles.duration}>{millisToMinutesAndSeconds(item.duration_ms)}</Text>
        </View>
    )
}

export default Song;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    index: {
        color: Themes.colors.gray,
    },

    image: {
        height: 50,
        width: 50,
        margin: 10,
    },

    nameBox: {
        width: 100,
        margin: 25
    },

    title: {
        color: Themes.colors.white,
    },

    artist: {
        color: Themes.colors.gray,
    },

    albumBox: {
        width: 100,
        margin: 10,
    },

    album: {
        color: Themes.colors.gray,
    }, 
    
    duration: {
        color: Themes.colors.gray,
    }
})