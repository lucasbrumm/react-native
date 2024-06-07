import { Text, View } from 'react-native'

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const returnShowValues = (widthHeight: Number) => {
  const dots = new Array(4).fill(0)
  return dots.map((_, index) => {
    return (
      <View
        key={index}
        style={{
          width: widthHeight,
          height: widthHeight,
          borderRadius: widthHeight / 2,
          backgroundColor: 'black',
          margin: 2,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>.</Text>
      </View>
    )
  })
}
