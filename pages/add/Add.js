import React from 'react'
import { Text } from 'react-native'
import { Index } from '../../components/add/Index'
import { Wrapper } from '../../components/wrapper/Wrapper'

export const Add = (props) => {
    return (
        <Wrapper navigation={props.navigation}  >
          <Index />
       </Wrapper>
    )
}
