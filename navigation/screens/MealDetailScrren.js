import { View, Text, Image } from "react-native"

import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealDetails";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
    const selectMeal = MEALS.find((meal)=> meal.id === mealId);
    return <View>
        <Image source={{uri: selectMeal.imageUrl}} style={{width: 100, height: 100}}/>
        <Text>{selectMeal.title}</Text>
        <View>
            <MealsDetails duration={selectMeal.duration} complexity={selectMeal.complexity} affordability={selectMeal.affordability} />
        </View>
        <Text>Ingredints</Text>
        {selectMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
        <Text>Steps</Text>
        {selectMeal.steps.map((step)=><Text key={step}>{step}</Text>)}
    </View>
}

export default MealDetailScreen