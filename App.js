import {Alert} from 'react-native';
import * as Location from "expo-location"
import {Loading} from './components/Loading';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Weather} from './components/Weather';

const API_KEY = 'e2e252845816dac6bb3d8d15e5d82815'

export default function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [temp, setTemp] = useState(0)
	const [conditionState, setConditionState] = useState('')

	const getWeather = async (latitude, longitude) => {
		const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)

		setTemp(temp)
		setConditionState(weather[0].main)
	}

	const getLocation = async () => {
		try {
			await Location.getForegroundPermissionsAsync()
			await Location.getBackgroundPermissionsAsync()

			const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000})

			await getWeather(latitude, longitude)
		} catch (error) {
			Alert.alert('Сбой сиситемы', 'Невозможно получить геоданные')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getLocation()
	}, [])

	return (
		isLoading ? <Loading /> : (
			<Weather
				temp={Math.round(temp)}
				condition={conditionState}
				isLoading={isLoading}
				getLocation={getLocation}
			/>
		)
	);
}