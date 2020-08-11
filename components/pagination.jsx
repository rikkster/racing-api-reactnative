import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, ScrollView, Text, StyleSheet } from 'react-native';
import { styles, pagination } from '../styles/global';

export const Pagination = (props) => {

    const [nums, setNums] = useState([]);

    useEffect(() => {

        const arr = [];

        let start = props.current > 2 
            ? props.current != props.amount ? props.current - 1 : props.current - 3
            : 1;
        
        let end = ((props.current + 2) <= props.amount)
            ? props.current != 1 ? props.current + 1 : props.current + 3
            : props.amount;

        let counter = 1;

        for (let i = start; i <= end; i++) {

            if (counter > 4) break;

            arr.push(i);
            counter++;

        };

        props.end < props.amount && arr.push(props.end);

        setNums(arr);

    }, [props.current])

    
    return (

        <View style={[ pagination.container, styles.shadow]}>

            { props.current > 4 

                ? <TouchableOpacity onPress={() => props.change(1)}>
                    
                    <View>

                        <Text style={[ pagination.btn, pagination.btn_arrow ]}>
                            {`«`}
                        </Text>

                    </View>

                </TouchableOpacity>
                
                : props.current === 1 && <Text style={ pagination.btn } /> }

            { props.current > 1 

                && <TouchableOpacity onPress={() => props.change(props.current - 1)}>
                    
                    <View>

                        <Text style={[ pagination.btn, pagination.btn_arrow ]}>
                            {`‹`}
                        </Text>

                    </View>

                </TouchableOpacity> }

            { nums.length > 0 && nums.map((n, index) => (

                <TouchableOpacity key={index} onPress={() => props.change(n)}>
                <View>

                    <Text style={[ pagination.btn, pagination.btn_num, n === props.current && pagination.btn_current ]}>
                        {n}
                    </Text>

                </View>
                </TouchableOpacity>

            ))}

            { props.current < props.amount 

                && <TouchableOpacity onPress={() => props.change(props.current + 1)}>
                    
                    <View>

                        <Text style={[ pagination.btn, pagination.btn_arrow ]}>
                            {`›`}
                        </Text>

                    </View>

                </TouchableOpacity> }

            { props.current < (props.amount - 4)

                ? <TouchableOpacity onPress={() => props.change(props.amount)}>
                    
                    <View>

                        <Text style={[ pagination.btn, pagination.btn_arrow ]}>
                            {`»`}
                        </Text>

                    </View>

                </TouchableOpacity> 
                
                : props.current === props.amount && <Text style={ pagination.btn } /> }

        </View>

    )

};