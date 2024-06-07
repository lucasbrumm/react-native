import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { User } from '../interfaces/UserInterface'

export default function Header({
  user,
  closeValues,
  setCloseValues,
  showPassword,
}: {
  user: User
  closeValues: boolean
  setCloseValues: any
  showPassword: any
}) {
  return (
    <View style={styles.header}>
      <View style={styles.imageAndOptions}>
        <Image
          style={styles.imageUser}
          source={{
            uri: user?.imageUser,
          }}
        />
        <View style={styles.iconsHeader}>
          <TouchableOpacity onPress={() => setCloseValues(!closeValues)}>
            {showPassword()}
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name='question-circle' size={25} color={'#FFF'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name='user-plus' size={25} color={'#FFF'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerTextUser}>
        <Text style={styles.textUser}>{`Olá, ${user?.name}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#820ad1',
  },
  nubankImage: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  buttonUsePassword: {
    backgroundColor: 'white',
    borderRadius: 25,
    position: 'absolute',
    bottom: '2%',
  },
  textButtonPassword: {
    paddingVertical: 15,
    paddingHorizontal: '25%',
  },
  containerAutenticado: {
    flex: 1,
  },
  header: {
    height: '15%',
    backgroundColor: '#820ad1',
    display: 'flex',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  imageAndOptions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageUser: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  iconsHeader: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  containerTextUser: {},
  textUser: {
    color: '#FFF',
    fontSize: 18,
  },
})
