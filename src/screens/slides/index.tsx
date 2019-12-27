import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { slides, ISlide } from './slides';
import { style } from './style';
import { Title, Body } from 'repeat-please-styles';
import { Walkthrough } from '../walkthrough';
import AppIntroSlider from 'react-native-app-intro-slider';

interface ISlideState {
	showRealApp: boolean;
}

interface ISlideItem {
	item: ISlide;
}

export class Slides extends Component<{}, ISlideState> {
	constructor(props = {}) {
		super(props);
		this.state = {
			showRealApp: false,
		};
	}

	renderItem = ({ item }: ISlideItem): JSX.Element => {
		return (
			<View style={style.slideContainer}>
				<Title>{item.title}</Title>
				<Image source={item.image} />
				<Body customStyle={style.textStyle}>{item.text}</Body>
			</View>
		);
	};

	onDone = (): void => {
		this.setState({ showRealApp: true });
	};

	render() {
		if (this.state.showRealApp) {
			return <Walkthrough />;
		}
		return (
			<AppIntroSlider
				renderItem={this.renderItem}
				slides={slides}
				onDone={this.onDone}
				bottomButton
				data-test="slidesComponent"
			/>
		);
	}
}
