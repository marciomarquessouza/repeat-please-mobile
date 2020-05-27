import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';

interface IAudioWaveSVGProps {
	first?: string;
	second?: string;
	third?: string;
	style?: StyleProp<ViewStyle>;
}

export const AudioWaveSVG = ({
	first = 'blue',
	second = 'red',
	third = 'orange',
	style,
}: IAudioWaveSVGProps) => {
	return (
		<Svg width={130} height={33} viewBox="0 0 130 33" fill="none" style={style}>
			<Path
				d="M115 22C115.609 20.1831 116 18.1712 116 16C116 13.7988 115.625 11.8356 115 10"
				stroke={first}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M119 27C120.826 23.82 122 20.9944 122 16.5C122 12.0056 120.875 9.21187 119 6"
				stroke={second}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M124 31C126.5 26.8313 128 22.7142 128 16.5C128 10.2858 126.5 6.25938 124 2"
				stroke={third}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M15 22C14.3913 20.1831 14 18.1712 14 16C14 13.7988 14.375 11.8356 15 10"
				stroke={first}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M11 27C9.17375 23.82 8 20.9944 8 16.5C8 12.0056 9.125 9.21187 11 6"
				stroke={second}
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M6 31C3.5 26.8313 2 22.7142 2 16.5C2 10.2858 3.5 6.25938 6 2"
				stroke={third}
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
};
