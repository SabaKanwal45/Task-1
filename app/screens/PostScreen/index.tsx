import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Modal, TouchableOpacity } from 'react-native';

import { AppColors } from '@app/theme';
import useAuth from '../../hooks/useAuth';
import useMedia from '../../hooks/useMedia';
import { IMedia } from 'store/modules/media/reducer';
import { MediaItem } from '@app/components';


const PostScreen = ({  navigation }) => {

    const { auth } = useAuth();
    const { media, fetchMediaListByUser } = useMedia();
    const [mediaList, setMediaList] = useState<IMedia[]>([]);

    useEffect(() => {
        if (auth && auth.auth) {
            fetchMediaListByUser(JSON.stringify({
                userId: auth.auth?.user_id,
                accessToken: auth.auth?.access_token
            }));
        } else {
            navigation.replace('Login');
        }
    }, []);

    useEffect(() => {
        if (media && media.mediaList && media.mediaList.data) {
            setMediaList(media.mediaList.data);
        }
        if (media.message.indexOf('OAuthException') >= 0) {
            auth.auth = null;
            navigation.replace('Login');
        }
    }, [media]);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ alignSelf: 'stretch' }}>
                <View style={{ marginHorizontal: 32, marginTop: 32 }}>
                    <View style={styles.topContainer}>
                        {mediaList.map((media, index) =>
                            <MediaItem key={index} {...media} />
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.bgColor,
    },
    topContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});

export default PostScreen;
