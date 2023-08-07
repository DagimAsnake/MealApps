import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"

import MealDetails from "../MealDetails"

const MealItem = ({title, imageUrl, affordability, duration, complexity, id}) => {
    const navigation = useNavigation()

    const PressHandler = () => {
        navigation.navigate('Meals Details', {mealId: id})
    }

    return(
        <View style={styles.mealItem}>
            <Pressable onPress={PressHandler} android_ripple={{color: '#ccc'}} style={({pressed}) => pressed ? styles.buttonPressed : null}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails affordability={affordability} duration={duration} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5
    },
})