import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IMicIconprops {
	color?: string;
}

export const MicIcon = ({ color = '#000' }: IMicIconprops) => (
	<Svg width={79} height={79} viewBox="0 0 79 79" fill="none">
		<Path
			d="M76 39.5C76 19.349 59.651 3 39.5 3S3 19.349 3 39.5 19.349 76 39.5 76 76 59.651 76 39.5z"
			stroke={color}
			strokeWidth={5}
			strokeMiterlimit={10}
		/>
		<Path
			d="M33.417 60.792h12.166M54.708 33.474v4.547c0 7.494-7.714 13.589-15.208 13.589s-15.208-6.095-15.208-13.59v-4.546M39.5 51.667v9.125"
			stroke={color}
			strokeWidth={5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M48.625 24.292a9.125 9.125 0 10-18.25 0v12.166a9.125 9.125 0 1018.25 0V24.292z"
			fill={color}
		/>
	</Svg>
);
