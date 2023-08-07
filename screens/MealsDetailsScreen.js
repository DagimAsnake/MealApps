import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

// import { FavoritesContext } from "../store/context/FavoritesContext";
import { addFavorite, removeFavorite } from "../store/redux/Favorites";

const MealsDetailsScreen = ({route, navigation}) => {
    // const favoritesMealsCtx = useContext(FavoritesContext)
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    // const mealIsFavorite = favoritesMealsCtx.ids.includes(mealId)
    const mealIsFavorite = favoriteMealIds.includes(mealId)


    const headerButtonPressHandler = () => {
        if(mealIsFavorite){
            // favoritesMealsCtx.removeFavorite(mealId)
            dispatch(removeFavorite({id: mealId}))
        } else{
            // favoritesMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({id: mealId}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return(
                    <IconButton icon={mealIsFavorite ? 'star' : "star-outline"} color='white' onPress={headerButtonPressHandler} />
                )
            }
        })
    }, [navigation, headerButtonPressHandler])

    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.tilte}>{selectedMeal.title}</Text>
            <MealDetails affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} duration={selectedMeal.duration} textStyle={styles.detailText} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    tilte: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})