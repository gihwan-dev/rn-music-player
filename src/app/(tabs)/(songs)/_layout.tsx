import React from 'react'

import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

import { StackScreenSearchBar } from '@/constants/layout'

const SongScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenSearchBar,
						headerTitle: 'Songs',
						headerSearchBarOptions: {}
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongScreenLayout
