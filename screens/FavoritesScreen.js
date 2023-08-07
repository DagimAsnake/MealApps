// import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native"

import MealsList from "../components/MealsList/MealsList"
// import { FavoritesContext } from "../store/context/FavoritesContext"
import { MEALS } from "../data/dummy-data"


const FavoritesScreen = () => {
    // const FavoriteMealCtx = useContext(FavoritesContext)
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

    // const favoriteMeals = MEALS.filter((meal) => FavoriteMealCtx.ids.includes(meal.id) )
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id) )


    if(favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have No favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})