import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { BannersInterface, BannersProps } from '../interfaces/BannerInterface'
import { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { returnDotValues } from '../utils/helper'

export default function Banners({ balance, closeValues }: BannersProps) {
  const banners: BannersInterface[] = [
    {
      id: 1,
      label: `Você tem até R$ ${balance} disponíveis para empréstimo.`,
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

  const returnBanners = () => {
    return banners.map((banner) => {
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
              {banner.id === 1 ? (
                bannerEmprestimo(banner.label)
              ) : (
                <Text>{banner.label}</Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      )
    })
  }

  const bannerEmprestimo = (stringBanner: string) => {
    return (
      <Text>
        {stringBanner.split(`R$ ${balance}`)[0]}
        {!closeValues ? (
          <Text style={{ fontWeight: 'bold' }}>R$ ....</Text>
        ) : (
          <Text style={{ fontWeight: 'bold' }}>R$ {balance}</Text>
        )}
        {stringBanner.split(`R$ ${balance}`)[1]}
      </Text>
    )
  }

  return (
    <View style={styles.bannerContainer}>
      <View style={styles.banners}>
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {returnBanners()}
          </ScrollView>
          <Text style={{ textAlign: 'center' }}>{returnDotPage()}</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bannerContainer: {
    display: 'flex',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  banners: {
    backgroundColor: '#e6e6e6',
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
})
