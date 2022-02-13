import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppColors } from '@app/theme';

interface IProps {
    onPress?: () => any;
    title: string;
}

const SimpleButton = (props: IProps) => {
    const { onPress, title } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: AppColors.primary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});

export default SimpleButton;
