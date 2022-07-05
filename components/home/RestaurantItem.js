import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
]

export default function RestaurantItem(props) {
  return (
    // activeOpacity turns off the animation when clicked
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
        {props.restaurantData.map((restaurant, index) => (
        <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
        ))}
    </TouchableOpacity>
    
  )
}

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image
        
        }} 
        style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{ flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" ,
    marginTop: 10,
    
    }}>
        <View>
            <Text style={{ fontSize:15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize:13, color: "gray" }}>30 - 45 . min</Text>
        </View>
        <View style={{ 
            backgroundColor: "#eee", 
            height: 30, 
            width: 30, 
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center",
             }}>
            <Text>{props.rating}</Text>
        </View>
        
    </View>
);

{/* <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
<View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
    <RestaurantImage />
     <RestaurantInfo />
</View>
</TouchableOpacity> */}