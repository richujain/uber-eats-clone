import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native";
import MenuItem from '../components/RestaurantDetail/MenuItem';
import firebase from '../firebase'; 

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Lasagna 4",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            
        ]
    })
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    const total = items
    .map((item => Number(item.price.replace('$', ''))))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en',{
        style: "currency",
        currency: "USD",
    })

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
          .collection("orders")
          .orderBy("createdAt", "desc")
          .limit(1)
          .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
              setLastOrder(doc.data());
            });
          });
    
        return () => unsubscribe();
      }, []);

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: "white" }}>
        <View style={{
            margin: 15,
            height: "100%",
            alignItems: 'center',
        }}>
            <LottieView style={{ height: 100, alignSelf: 'center', marginBottom: 30, }}
                source ={require('../assets/animations/check-mark.json')}
                autoPlay
                speed ={0.5}
                loop={false}
            />
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}>Your order at { restaurantName } has been placed for { totalUSD } </Text>
            <ScrollView>
                <View>
                    <MenuItem foods={lastOrder.items} hideCheckbox={true} />
                </View>
                <View>
                <LottieView style={{ height: 200, alignSelf: 'center', marginBottom: 30, }}
                source ={require('../assets/animations/cooking.json')}
                autoPlay
                speed ={0.5}
            />
                </View>
            </ScrollView>
            
        </View>
        
    </SafeAreaView>
  )
}