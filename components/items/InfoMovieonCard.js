import React from 'react';
import { Text, View } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";


export default function InfoMovieonCard({ info, iconName, color, size }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 3 }}>
                <Icon color={color} size={size} name={iconName} />
                <Text style={{ color: color, marginLeft: 10, fontSize: size }}>{info}</Text>
        </View>
    );
}

