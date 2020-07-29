import React from 'react';
import {View, Text} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
const Test = (props) => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.store);
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}

export default Test