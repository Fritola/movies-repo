import React from 'react'
import {CardContainer, Image, AverageContainer, CardScrollContainer, Subtitle} from './style'
import { Text, TouchableOpacity, View } from 'react-native';

const Cards = ({movies, subtitle}) => {
    return(
        <View>
            <Subtitle>{subtitle}</Subtitle>
            <CardScrollContainer showsHorizontalScrollIndicator={false} horizontal={true}>
                {movies.map((movie, i) =>
                    <TouchableOpacity key={i}>
                        <CardContainer>                
                            <Image source={{uri: `https://image.tmdb.org/t/p/w300/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg`}}/>
                            <AverageContainer>
                                <Text>{movie.vote_average}</Text>
                            </AverageContainer>
                        </CardContainer>
                    </TouchableOpacity>
                )}
            </CardScrollContainer>
        </View>
    )
}

export default Cards