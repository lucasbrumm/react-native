import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { BannersInterface } from '../interfaces/BannerInterface'

export default function Banners({ balance }) {
  const screenWidth = Dimensions.get('window').width

  const banners: BannersInterface[] = [
    {
      id: 1,
      label: `Você tem até RS ${balance} disponíveis para empréstimo.`,
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
