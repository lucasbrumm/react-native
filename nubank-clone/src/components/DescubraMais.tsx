import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Fragment } from 'react'

export default function DescubraMais() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {/* {icons.map((icon) => {
        return (
          <View key={icon.id} style={styles.container}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome
                name={icon.name}
                size={icon.size}
                color={icon.color}
              />
            </TouchableOpacity>
            <Text style={{ width: 62, textAlign: 'center' }}>{icon.label}</Text>
          </View>
        )
      })} */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  icon: {
    padding: 20,
    backgroundColor: '#e6e6e6',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
