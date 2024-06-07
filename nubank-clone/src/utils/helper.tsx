import { Text, View } from 'react-native'

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const returnShowValues = () => {
  const dots = new Array(4).fill(0)
  return dots.map((_, index) => {
    return (
      <View
        key={index}
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'black',
          margin: 2,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>.</Text>
      </View>
    )
  })
}
