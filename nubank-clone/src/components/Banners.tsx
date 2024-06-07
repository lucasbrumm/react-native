import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { BannersInterface, BannersProps } from '../interfaces/BannerInterface'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'

export default function Banners({ balance, closeValues }: BannersProps) {
  const banners: BannersInterface[] = [
    {
      id: 1,
      balance: balance,
      label: `Você tem até RS disponíveis para empréstimo R$ `,
      label2: ` disponíveis para empréstimo.`,
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
  const [currentPage, setCurrentPage] = useState<number>(0)

  const screenWidth = Dimensions.get('window').width

  const handleScroll = (event: any) => {
    const newPage = Math.round(event.nativeEvent.contentOffset.x / screenWidth)
    setCurrentPage(newPage)
  }

  const returnDotPage = () => {
    const dots = new Array(banners.length).fill(0)
    return dots.map((_, index) => {
      return (
        <Text
          key={index}
          style={{ color: index === currentPage ? '#000' : '#888' }}
        >
          <Icon name='dot-single' />
        </Text>
      )
    })
  }

  return (
    <View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {banners.map((banner) => {
          return (
            <TouchableOpacity key={banner.id}>
              <View
                style={{
                  width: screenWidth - 40,
                  padding: 20,
                  justifyContent: 'center',
                  borderRadius: 15,
                }}
              >
                <View style={{ width: '100%' }}>
                  <Text>
                    {banner.label}
                    <Text style={{ fontWeight: 'bold' }}>{banner.balance}</Text>
                    {banner.label2}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <Text style={{ textAlign: 'center' }}>{returnDotPage()}</Text>
    </View>
  )
}
