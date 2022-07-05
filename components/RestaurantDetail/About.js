import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: "https://images.unsplash.com/photo-1564759224907-65b945ff0e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ,
    price: '$$',
    reviews: '1500',
    rating: '4.5',
    categories: [{title: 'Thai'}, {title: 'Comfort Food'}]
};
const image = "https://images.unsplash.com/photo-1564759224907-65b945ff0e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai • Comfort Food • $$ • 🎫 • 4 ⭐ (2913+)"

export default function About() {
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }}/>
)

const RestaurantTitle = (props) => (
    <Text style={{ 
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,

     }}>{ props.title }</Text>
)

const RestaurantDescription = (props) => (
    <Text style= {{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5,
    }}>{ props.description }</Text>
)