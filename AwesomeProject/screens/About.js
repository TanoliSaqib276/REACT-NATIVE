import React from "react";
import { Button, Text, View } from "react-native";

export default function AboutScreen({ navigation }) {
    return (
        <View>
            <Text>This Is About Screen.</Text>
            <Button
                title="Go to Home... again"
                onPress={() => navigation.navigate('Home')}
            />
            
        </View>
    )
}