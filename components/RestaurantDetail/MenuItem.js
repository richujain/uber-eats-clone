import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderlion chicken off the sizzles",
        price: "$19.50",
        image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
        price: "$14.50",
        image: "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderlion chicken off the sizzles",
        price: "$19.50",
        image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
        price: "$14.50",
        image: "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderlion chicken off the sizzles",
        price: "$19.50",
        image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
        price: "$14.50",
        image: "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
    },
})

export default function MenuItem({restaurantName}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkBoxValue) => dispatch({
    type: 'ADD_TO_CART', 
    payload: { ...item, restaurantName: restaurantName, checkBoxValue: checkBoxValue} 
    });

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);
    const isFoodInCart = (food, cartItems) => (
        Boolean(cartItems.find((item) => item.title == food.title))
    )

  return (
    // Custom style---------------------------
    <View>
    <ScrollView showsVerticalScrollIndicator={false} style={{
        flex: 1,
        paddingBottom: 500,
        }}
        > 
    {foods.map((food, index) => (
        <View key={index}>
            <View style={styles.menuItemStyle}>
                <BouncyCheckbox 
                iconStyle={{borderColor: 'lightgray' }}
                fillColor="green"
                onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
                isChecked={isFoodInCart(food, cartItems)}
                />
                <FoodInfo food={food} />
                <FoodImage food={food} />
            </View>
            <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}} />
        </View>
    ))}
    </ScrollView>
    </View>
  );
  
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{ 
            width: 100, 
            height: 100,
            borderRadius: 8,
         }} />
    </View>
)