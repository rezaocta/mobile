import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({placeholder}) => {
    return (
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#45a190'/>
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#3cb49e',
        borderRadius: 15,
        width:200,
        marginBottom: 45,
        marginTop:10,
        paddingHorizontal:18,
        fontSize:15,
        color: '#3cb49e',
    }
})
