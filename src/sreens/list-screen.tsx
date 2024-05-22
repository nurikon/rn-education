import { View, Text, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomListItem from '../components/CustomListItem'
import { MainNavigationParams } from '../route/mainNavigationParams'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type userItem = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

const ListScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>()
    const [listData, setListData] = useState<userItem[]>()
    const [loading, setLoading] = useState(true)

    const getListData = async () => {
        try {
            const dataResponse = await fetch('https://jsonplaceholder.typicode.com/users')
            const jsonData = await dataResponse.json()
            setListData(jsonData)
            setTimeout(() => {
                setLoading(false)
            }, 1500);
            console.log('xxxx', jsonData);
        } catch (error) {
            console.log('error');
        }
    }

    useEffect(() => {
        getListData()
    }, [])

    const toRoute = (id: number) => {
        navigation.navigate('UserDetail', { id: id })
    }


    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                {!loading && <FlatList
                    data={listData}
                    renderItem={({ item }) => <CustomListItem name={item.name} email={item.email} onPress={() => toRoute(item.id)} />}
                    keyExtractor={(item) => item.id.toString()}
                />}
                {loading && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={'large'} color={'red'} />
                    </View>
                )}
            </SafeAreaView>
        </View>
    )
}

export default ListScreen