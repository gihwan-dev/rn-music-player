import React from 'react'

import { FlatList, FlatListProps, Text, View } from 'react-native'

import { unknownTrackImageUri } from '@/constants/image'
import { utilsStyles } from '@/styles'
import FastImage from 'react-native-fast-image'
import TrackPlayer, { Track } from 'react-native-track-player'
import { TrackListItem } from './TrackListItem'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const ItemDivider = () => (
	<View
		style={{
			...utilsStyles.itemSeparator,
			marginVertical: 9,
			marginLeft: 60,
		}}
	/>
)

export const TracksList = ({ tracks, ...flatListProps }: TracksListProps) => {
	const handleTrackSelect = async (track: Track) => {
		await TrackPlayer.load(track)
		await TrackPlayer.play()
	}

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={tracks.length === 0 ? undefined : ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			ListEmptyComponent={
				<View>
					<Text style={utilsStyles.emptyContentText}>No songs found</Text>
					<FastImage
						source={{
							uri: unknownTrackImageUri,
						}}
						style={utilsStyles.emptyContentImage}
					/>
				</View>
			}
			renderItem={({ item: track }) => (
				<TrackListItem onTrackSelect={handleTrackSelect} track={track} />
			)}
			{...flatListProps}
		/>
	)
}
