import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { AppColors } from '@app/theme';
import { IMedia } from 'store/modules/media/reducer';
import { Video } from '@app/components'


const { height } = Dimensions.get('window')


const MediaItemDetail = (props: IMedia) => {

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {props.media_type === 'IMAGE' && <Image style={styles.bodyImage} source={{
                    uri: props.media_url,
                }} />}
                {props.media_type === 'VIDEO' && <Video style={styles.bodyImage} uri={props.media_url} />}
            </View>
            <View style={styles.body}>
            <Text>{props.username}</Text>
            <Text>{props.caption}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    body: {
        width: '50%'    
    },
    bodyImage: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1,
        marginBottom: 10,
    },
    
});

export default MediaItemDetail;
