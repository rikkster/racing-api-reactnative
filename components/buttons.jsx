import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles, buttons, bgcolor } from '../styles/global';

export const Circle_button = ({ onPress, title, color = "orange" }) => (

    <TouchableOpacity style={[buttons.btn_circle, bgcolor[color] ]} onPress={onPress}>

        <Text style={[buttons.btn_circle_text, styles.textShadow]}>{title}</Text>

    </TouchableOpacity>

); 

export const Button_more = ({ onPress, title, color = "orange" }) => (

    <TouchableOpacity onPress={onPress}>

        <Text style={[ buttons.btn_more, bgcolor[color], styles.textShadow ]}>{title}</Text>

    </TouchableOpacity>

);