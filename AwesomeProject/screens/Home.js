import React from "react";
import { Button, Text, View } from "react-native";



export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>This Is Home Screen.</Text>

            <Button
                title="Go to About"
                onPress={() => navigation.push('About')}
            />
        </View>
    )
}