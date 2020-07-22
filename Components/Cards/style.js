import styled from 'styled-components'

export const CardContainer = styled.View`
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 10px;
`
export const CardScrollContainer = styled.ScrollView`
    flex-direction: row;
    padding: 20px;
    padding-left: 12px;
    padding-top: 10px;
` 

export const Subtitle = styled.Text`
    font-size: 20px;
    margin-left: 20px;
    margin-top: 40px;
`

export const Image = styled.Image`
    border-radius: 30px;
    width: 300px;
    height: 350px;
`
export const AverageContainer = styled.View`
    bottom: 0;
    left: 0;
    margin-left: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 25px;
    border-radius: 10px;
    position: absolute;
    background-color: #E3E4E6;
`