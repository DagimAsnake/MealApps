import { FlatList } from "react-native";

import {CATEGORIES} from '../data/dummy-data'
import CategoriesGridTile from "../components/CategoriesGridTile";


const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = (itemData) => {
        const PressHandler = () => {
            navigation.navigate('Meals Overview', {categoryId: itemData.item.id})
        }
    
        return(
            <CategoriesGridTile tilte={itemData.item.title} color={itemData.item.color} onPress={PressHandler} />
        )
    }
    return(
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />
    )
}

export default CategoriesScreen