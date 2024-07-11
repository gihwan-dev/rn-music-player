import React from 'react'

import { StackScreenSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const FavoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenSearchBar,
						headerTitle: 'Favorites',
					}}
				/>
			</Stack>
		</View>
	)
}

export default FavoritesScreenLayout
