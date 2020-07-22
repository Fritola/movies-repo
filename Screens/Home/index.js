import React, {useEffect, useState} from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import api from '../../Services/api'
import {Container, Subtitle, CardContainer, Image, AverageContainer} from './style'

import Cards from '../../Components/Cards'

const Home = () => {

    const[movies, setMovies] = useState([])
    const[topMovies, setTopMovies] = useState([])

    const getMovies = async () => {
        let res = await api.get('trending/movie/week?api_key=68e60675a5e85420dbde89bed8740203')
        const {results} = res.data    
        setMovies(results)
	}
	
	const getTopMovies = async () => {
		let res = await api.get('/movie/top_rated?api_key=68e60675a5e85420dbde89bed8740203')
		const {results} = res.data
		setTopMovies(results)
	}

	const getPoster = async () => {
		let res = await api.get('/movie/238/images?api_key=68e60675a5e85420dbde89bed8740203')
		console.log(res)
	}

    openMovie = (movieID) => {
        alert(movieID)
    }

    useEffect(() => {
		StatusBar.setBarStyle("dark-content", true)
		getTopMovies()
		getMovies() 
		getPoster()   
    }, [])
    
    return (    
		<SafeAreaView>
			<Container >            
				<Cards subtitle="Trending Now" movies={movies}/>
				<Cards subtitle="Top rated" movies={topMovies}/>
				<Cards movies={movies}/>
			</Container>        
		</SafeAreaView>
    );
}
export default Home
