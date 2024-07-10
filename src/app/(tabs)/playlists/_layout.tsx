import React from 'react'

import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const PlaylistsLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="playlists"
					options={{
						headerTitle: 'Playlists',
					}}
				/>
			</Stack>
		</View>
	)
}

export default PlaylistsLayout
