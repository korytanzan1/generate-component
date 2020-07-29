import React from 'react';
import {View, Text} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
const Testjs = (props) => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.store);
    return (
        <View>
            <Text>Testjs</Text>
        </View>
    )
}

export default Testjs