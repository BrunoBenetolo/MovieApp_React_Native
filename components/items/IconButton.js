import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default function IconButton({ name, onPressButton, color }) {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPressButton}>
            <Icon style={[styles.icone, {color: color}] } name={name} />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    botao: {
        width: 40,
        height: 40, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    icone: {
        fontSize: 32,
    }
});