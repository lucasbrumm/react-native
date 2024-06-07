import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function Banners() {
  const screenWidth = Dimensions.get('window').width

  const banners = [
    {
      id: 1,
      label: 'Você tem até ',
    },
    {
      id: 2,
      label: 'Convide amigos para o Nubank e desbloqueie brasões incríveis.',
    },
    {
      id: 3,
      label: 'Convide amigos para o Nubank e desbloqueie brasões incríveis.',
    },
  ]
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
      {banners.map((banner) => {
        return (
          <TouchableOpacity
            key={banner.id}
            style={{
              width: screenWidth,
              //   alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={{ maxWidth: '60%', backgroundColor: 'blue' }}>
              <Text>{banner.label}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}
