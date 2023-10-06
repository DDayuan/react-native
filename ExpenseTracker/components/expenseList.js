import { FlatList, View, Text } from "react-native";
import ExpenseItem from "./expenseItem";

function ExpensesList({expenses}) {

    function renderExpenses(itemData) {
        return <View>
            <ExpenseItem {...itemData.item}/>
        </View>
    }

    return <View>
        <FlatList data={expenses} keyExtractor={item => item.id} renderItem={renderExpenses}/>
    </View>
}

export default ExpensesList;