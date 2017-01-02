/**
 * Created by zhanglei on 2017/1/2 0002.
 */
import React from 'react';
import './Button.css'

export default class Button extends React.Component {
    render() {
        return (
            <div className="button">
                <Image className="button-image"/>
                <Text className="button-text" />
            </div>
        );
    }
}