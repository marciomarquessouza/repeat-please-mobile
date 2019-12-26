import React, { Component } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { Title, Body } from 'repeat-please-styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Walkthrough } from '../walkthrough';
import { style } from './style';

interface ISlideState {
    showRealApp: boolean;
}

interface ISlide {
    item: {
        title: string;
        text: string;
        image: ImageSourcePropType;
    }
}

const slides = [
    {
        key: 'slide_01',
        title: 'Welcome to',
        text: 'It’s time to have fun while you improve your pronunciation.',
        image: require('../../../assets/images/speaker_girl.png'),
        backgroundColor: '#EBD935',
    },
    {
        key: 'slide_02',
        title: 'Pronunciation Challenges',
        text: 'It’s time to have fun while you improve your pronunciation.',
        image: require('../../../assets/images/monkey_mouth.png'),
        backgroundColor: '#EBD935',
    },
    {
        key: 'slide_03',
        title: 'Follow up your progress',
        text: 'It’s time to have fun while you improve your pronunciation.',
        image: require('../../../assets/images/monkey_smile.png'),
        backgroundColor: '#EBD935',
    },
];

export class Slides extends Component <{}, ISlideState> {
    constructor(props={}) {
        super(props);
        this.state = {
            showRealApp: false,
        };
    }
    
    renderItem = ({ item }: ISlide): JSX.Element => {
        return (
            <View style={style.slideContainer}>
                <Title>{item.title}</Title>
                <Image source={item.image} />
                <Body customStyle={style.textStyle} >{item.text}</Body>
            </View>
        );
    };

    onDone = (): void => {
        this.setState({ showRealApp: true })
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
