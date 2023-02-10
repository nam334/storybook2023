import React from "react";
import Input from "./Input";

export default {
    title:'Form/Input',
    component: Input
}

export const Small = () => <Input variant='sm' placeholder='small..' />
export const Medium = () => <Input variant='md' />
export const Large = () => <Input variant='lg' />