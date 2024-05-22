import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { MainNavigationParams } from '../route/mainNavigationParams'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { userItem } from './list-screen';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<MainNavigationParams, 'UserDetail'>;

const UserDetail = ({ route }: Props) => {
  const [userDetail, setUserDetail] = useState<userItem>()
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>()

  useEffect(() => {
    getDetail()
  }, [])

  const getDetail = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
      const data: userItem = await response.json();
      setTimeout(() => {
        setLoading(false)
    }, 1500);
      setUserDetail(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      {!loading && <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text> Geri </Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Kullanıcı Profili</Text>
        </View>

        {userDetail && (
          <View style={styles.content}>
            <Text style={styles.contentText}>{userDetail.name}</Text>
            <Text style={styles.contentText}>{userDetail.email}</Text>
            <Text style={styles.contentText} >{userDetail.phone}</Text>
            <Text style={styles.contentText} >{userDetail.address.suite}/{userDetail.address.city}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.albumsButton} onPress={() => alert('burada albümler sayfasına gidecek')}>
          <Text style={styles.albumsTitle}>ALBUMS</Text>
        </TouchableOpacity>
      </View>}
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      )}
    </SafeAreaView>
  )
}

export default UserDetail

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingRight: 70,
    paddingBottom: 20
  },
  headerTitle: {
    fontWeight: 'bold'
  },
  backButton: {
    padding: 3,
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  contentText: {
    marginBottom: 5,
  },
  albumsButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    borderWidth: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5
  },
  albumsTitle: {}

})