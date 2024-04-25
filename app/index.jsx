import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <View className='flex h-[80vh] w-full items-center justify-center'>
      <Text>index</Text>

      </View>
    </SafeAreaView>
  )
}

export default index