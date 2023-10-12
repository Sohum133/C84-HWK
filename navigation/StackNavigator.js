import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator =()=>{
    return(
        <StackNavigator 
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigator}/>
            <Stack.Screen name="PostScreen" component={PostScreen}/>
        </StackNavigator>
    );
};

export default StackNavigator;


