import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItem'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = "Loco5voB7QlJT43paP6EHGT4zXvYqh-dy7SyZV_fQiql6Ld-AWh-1_coZLhNV3nDP2NR9C478I54JME9Qv_f6DYYbtIIh1BpRXpn2YBaBs-9lPSBZEZG7dkHY6DzYHYx"
//console.log(process.env.REACT_APP_YELP_KEY)

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("Houston")
    const [activeTab, setActiveTab] = useState("Delivery")

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
            return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(
                json.businesses.filter((business) => 
                business.transactions.includes(activeTab.toLowerCase())
                )));
        };
    //useEffect functions take two parameters, 1. Callback function and 2. Dependency
    
    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab]) //This hook looks for a change in city variable, the function will be evoked right when it detects the change. 


  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar cityHandler = {setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={ false }>
            <Categories />
            <RestaurantItem restaurantData={ restaurantData } />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
    </SafeAreaView>
  )
}