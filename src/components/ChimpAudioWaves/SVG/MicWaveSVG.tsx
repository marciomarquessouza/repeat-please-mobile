import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';

interface IMicWaveSVGProps {
	first?: string;
	second?: string;
	third?: string;
	style?: StyleProp<ViewStyle>;
}

export const MicWaveSVG = ({
	first = 'blue',
	second = 'red',
	third = 'orange',
	style,
}: IMicWaveSVGProps) => {
	return (
		<Svg width={55} height={33} viewBox="0 0 55 33" fill="none" style={style}>
			<Path
				d="M40 22C40.6087 20.1831 41 18.1712 41 16C41 13.7988 40.625 11.8356 40 10"
				stroke={first}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M44 27C45.8262 23.82 47 20.9944 47 16.5C47 12.0056 45.875 9.21187 44 6"
				stroke={second}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M49 31C51.5 26.8313 53 22.7142 53 16.5C53 10.2858 51.5 6.25938 49 2"
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
