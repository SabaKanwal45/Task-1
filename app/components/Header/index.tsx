import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';

import { AppColors } from '@app/theme';
import { Scene } from '@react-navigation/drawer/lib/typescript/src/types';

interface IProps {
    scene: Scene;
}

const Header = ({ scene, previous, navigation }) => {
    const { options } = scene.descriptor;
    const title = options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
            ? options.title
            : scene.route.name;

    const goBack = () => navigation.pop();
    const openDrawer = () => navigation.openDrawer();
    const alertTest = () => Alert.alert('test');

    return (
        <SafeAreaView style={styles.header}>
            {previous ? (
                <TouchableOpacity onPress={goBack}>
                    <AntDesign name="arrowleft" size={17} color={AppColors.primary} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={openDrawer}>
                    <Feather name="menu" size={22} color={AppColors.textColor} />
                </TouchableOpacity>
            )}
            <Text>{title}</Text>
            <TouchableOpacity onPress={alertTest}>
                <AntDesign name="question" size={17} color={AppColors.primary} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: AppColors.bgColor,
        elevation: 0,
        shadowOpacity: 0,
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 15,
    }
});

export default Header;
