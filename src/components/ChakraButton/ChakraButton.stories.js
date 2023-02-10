import React from "react"; 
import { Button } from "@chakra-ui/react";
import {action, actions} from '@storybook/addon-actions'

export default{
    title:'Chakra/Button',
    component:Button,
    argsTypes:{
        onClick:{action:'clicked'}
    }
}

// const Template = args => <Button {...args} />
// export const Success = Template.bind({})
// Success.args = {
//     colorScheme:'green',
//     children:'Success'
// }

export const Success = () => <Button onClick={action('Click handler')} colorScheme='blue'>Success</Button>

export const Danger = () => <Button onClick={()=> console.log('button clicked')} 
colorScheme='red'>Danger</Button>