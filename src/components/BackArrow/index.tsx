import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export interface IBackArrowProps {
	color?: string;
}

export const BackArrow = (props: IBackArrowProps): JSX.Element => {
	const strokeColor = props.color || '#000';

	return (
		<Svg
			width={wp('8%')}
			height={wp('8%')}
			viewBox="0 0 36 36"
			fill="none"
			{...props}
			data-test="BackArrow">
			<Path
				d="M18 34.23c8.837 0 16-7.295 16-16.296 0-9-7.163-16.296-16-16.296S2 8.934 2 17.934s7.163 16.297 16 16.297z"
				stroke={strokeColor}
				strokeWidth={3}
			/>
			<Path
				d="M26 18.124H10l5.877-9.273"
				stroke={strokeColor}
				strokeWidth={3}
				strokeLinejoin="bevel"
			/>
			<Path
				d="M26 18.124H10l5.877 8.243"
				stroke={strokeColor}
				strokeWidth={3}
				strokeLinejoin="round"
			/>
		</Svg>
	);
};
