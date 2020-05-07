import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface ISemiCircleProps {
	color?: string;
}

export const SemiCircle = ({ color = '#F2F2F2' }: ISemiCircleProps) => (
	<Svg width={100} height={50} viewBox="0 0 100 50" fill="none">
		<Path d="M0 50C0 22.386 22.386 0 50 0s50 22.386 50 50H0z" fill={color} />
	</Svg>
);
