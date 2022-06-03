import React from 'react';
import { StatusBar } from 'react-native'

import COLORS from '@constants/colors';

const StatusBarApp: React.FC = () => {
    return(
        <StatusBar
            barStyle = 'light-content'
            animated
            backgroundColor = { COLORS.GREEN_LIGHT }
        />
    )
}

export default StatusBarApp;