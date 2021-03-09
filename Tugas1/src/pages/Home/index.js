import React from 'react';
import { Text, View, Image } from 'react-native';
import ActionButton from './ActionButton';
import {home} from '../../assets';
import {Input} from '../../components';
import { useEffect } from 'react';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Home = ({navigation}) => {
    const HomeReducer = useSelector(state => state.HomeReducer);
    const dispatch = useDispatch()

    // const [dataUser, setDataUser] = useState({
    //     beratBadan : '',
    //     tinggiBadan : ''
    // })

    // useEffect(() => {
    //     console.log('reducer:', HomeReducer);
    // }, [HomeReducer]);

    const sendData = () =>{
        console.log('data yang dikirim: ', HomeReducer.dataUser);
    }

    const onInputChange = (value, input) => {
        // setDataUser({
        //     ...dataUser,
        //     [input]: value,
        // })
        dispatch({type: 'SET_DATAUSER', inputType: input, inputValue: value});
    }

    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    };
  
    return (
        <View style={styles.wrapper.page}>
            <Image source={home} style={styles.wrapper.illustration}/>
            <Text style={styles.text}>Selamat datang!</Text>
            
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                Masukkan Berat Badan 
            </Text>
            <Input 
                placeholder="Berat Badan (kg)" 
                value={HomeReducer.dataUser.beratBadan}
                onChangeText = {value => onInputChange(value,'beratBadan')}
            />
            
            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>
                Masukkan Tinggi Badan
            </Text>
            <Input 
                placeholder="Tinggi Badan (cm)" 
                value={HomeReducer.dataUser.tinggiBadan}
                onChangeText = {value => onInputChange(value, 'tinggiBadan')}
            />
            
            <ActionButton 
                desc="Apakah berat badanmu sudah ideal?" 
                title='Hitung' 
                onPress={sendData} // () => handleGoTo('Finish')
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

export default Home;