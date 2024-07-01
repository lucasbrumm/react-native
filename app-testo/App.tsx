import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'

export default function App() {
  const [openCalendarModal, setOpenCalendarModal] = useState<boolean>(false)
  const [onChangeDate, setOnChangeDate] = useState<Date>()

  useEffect(() => {
    console.log(onChangeDate)
  }, [onChangeDate])
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Abrir Calendário</Text>
      <Button title='Marcar' onPress={() => setOpenCalendarModal(true)} />

      <Modal
        visible={openCalendarModal}
        animationType='slide'
        style={styles.modalCalendar}
      >
        <View style={styles.containerModalCalendar}>
          <CalendarPicker onDateChange={setOnChangeDate} />
          <Button title='Fechar' onPress={() => setOpenCalendarModal(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerModalCalendar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCalendar: {
    // backgroundColor: 'red',
  },
})
