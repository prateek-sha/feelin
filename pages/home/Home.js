import React from 'react'
import { Text } from 'react-native'
import { Wrapper } from '../../components/wrapper/Wrapper'

import Draggable from 'react-native-draggable';
export const Home = (props) => {
    return (
        <Wrapper navigation={props.navigation} >
           <Draggable x={75} y={100} renderSize={56}  renderColor='black' renderText='A' isCircle  onShortPressRelease={()=>alert('touched!!')}/> 
        <Draggable x={200} y={233} renderColor='red' renderText='B'/>
    </Wrapper>
    )
}


