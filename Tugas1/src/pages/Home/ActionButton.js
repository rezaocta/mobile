import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';

const ActionButton = ({onPress, title}) => {
    
    return (
        <View style={{ marginBottom: 43, maxWidth: 225 }}>
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                Masukkan Berat Badan
            </Text>
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                Masukkan Tinggi Badan
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: '#3cb49e',
                    borderRadius: 15,
                    paddingVertical: 13,
                    paddingLeft: 13,

                }}onPress={onPress}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                    }}
                    onPress={onPress}> Hitung Berat Ideal
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ActionButton;