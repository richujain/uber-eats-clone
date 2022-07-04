import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'

const YELP_API_KEY = "Loco5voB7QlJT43paP6EHGT4zXvYqh-dy7SyZV_fQiql6Ld-AWh-1_coZLhNV3nDP2NR9C478I54JME9Qv_f6DYYbtIIh1BpRXpn2YBaBs-9lPSBZEZG7dkHY6DzYHYx"

export default function Home() {
    const [restaurantData, setRestaurantData] = React.useState(localRestaurants)

    const getRestaurantsFromYelp = () => {
        const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=M1M2C3';
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
            return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            // .then(json => {
            //     console.log(json);
            // })
            // .catch(err => console.error(err))
            .then((json) => setRestaurantData(json.businesses));
        };
    //useEffect functions take two parameters, 1. Callback function and 2. Dependency
    
    useEffect(() => {
        getRestaurantsFromYelp()
        //console.log(getRestaurantsFromYelp())
    }, [])


  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={ false }>
            <Categories />
            <RestaurantItem restaurantData={ restaurantData }/>
        </ScrollView>
    </SafeAreaView>
  )
}