import React from 'react';
import { Text, View, Image } from 'react-native';
import ActionButton from './ActionButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

// import {home} from '../../assets';

const Finish = ({navigation}) => {
    const HomeReducer = useSelector(state => state.HomeReducer);
    const dispatch = useDispatch();

    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };

    // useEffect(() => {
    //     return ((HomeReducer.dataUser.tinggiBadan - 100) - ((HomeReducer.dataUser.beratBadan - 100)*15/100) );
    // })

    return (
        <View style={styles.wrapper.page}>
            <Text style={styles.text}>Ini Hasilnya!</Text>
            <Text style={styles.text}>
                Berat Badan anda {HomeReducer.dataUser.beratBadan}
            </Text>
            <Text style={styles.text}>
                Tinggi Badan anda {HomeReducer.dataUser.tinggiBadan}
            </Text>
            
            <ActionButton 
                desc="ulangi" 
                title='kembali' 
                onPress={ () => handleGoTo('Home')}
            />
            
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            backgroundColor: 'white',
        },
        illustration: {
            width: 219, 
            height: 117, 
            marginBottom: 10 
        },
        
    },
    text: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#3cb49e', 
        marginBottom: 50 
    },
}

export default Finish;