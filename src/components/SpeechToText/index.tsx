import React, { Component } from 'react';
import { IconButton } from '../IconButton';
import Voice from '@react-native-community/voice';
import { styles } from './styles';

type StatusType = 'waiting' | 'started' | 'finished' | 'error';

export interface ISpeechToTextState {
	pitch: string;
	status: StatusType;
	results: string[];
	partialResults: string[];
}

export interface ISpeechtoTextProps {
	disabled?: boolean;
	onResult: (result: string) => void;
}

export class SpeechToText extends Component<
	ISpeechtoTextProps,
	ISpeechToTextState
> {
	constructor(props: ISpeechtoTextProps) {
		super(props);
		Voice.onSpeechStart = () => this.setState({ status: 'started' });
		Voice.onSpeechEnd = () => this.setState({ status: 'finished' });
		Voice.onSpeechError = () => this.setState({ status: 'error' });
		Voice.onSpeechResults = this.onSpeechResults;
		Voice.onSpeechPartialResults = this.onSpeechPartialResults;
		Voice.onSpeechVolumeChanged = this.onSpeechVolumeChange;
	}

	state: ISpeechToTextState = {
		pitch: '',
		status: 'waiting',
		results: [],
		partialResults: [],
	};

	componentWillUnmount() {
		Voice.destroy().then(Voice.removeAllListeners);
	}

	onSpeechResults = (e: any) => {
		this.setState({ results: e.value });
		this.props.onResult(e.value.join(' '));
		this.stopRecognizing();
	};

	onSpeechPartialResults = (e: any) => {
		this.setState({ partialResults: e.value });
	};

	onSpeechVolumeChange = (e: any) => {
		this.setState({ pitch: e.value });
	};

	startRecognizing = async () => {
		this.setState({
			pitch: '',
			status: 'waiting',
			results: [],
			partialResults: [],
		});

		try {
			await Voice.start('en-US');
			const isRecognizing = await Voice.isRecognizing();
			console.warn('isRecognizing', isRecognizing);
			const speech = await Voice.getSpeechRecognitionServices();
			console.warn('speech', speech);
		} catch (error) {
			console.error('Error on voice start', error);
		}
	};

	stopRecognizing = async () => {
		try {
			await Voice.stop();
		} catch (error) {
			console.error('Error on voice stop', error);
		}
	};

	render() {
		const { disabled = false } = this.props;
		return (
			<IconButton
				name="mic"
				style={styles.micIconStyle}
				onPress={this.startRecognizing}
				disabled={disabled}
			/>
		);
	}
}
