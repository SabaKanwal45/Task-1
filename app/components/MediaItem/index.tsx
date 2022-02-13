import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Modal} from 'react-native';
import { AppColors } from '@app/theme';
import { IMedia } from 'store/modules/media/reducer';
import { Video, MediaItemDetail} from '@app/components'


const { height } = Dimensions.get('window')


const MediaItem = (props: IMedia) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.postHeader}>
                <TouchableOpacity
                    style={styles.infoWrapper}>
                    <Text style={{
                        fontWeight: '600'
                    }}>{props.username}</Text>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity onPress={() => {
                console.log("inside on press post")
                setModalVisible(true);
            }}>
                <Text>View Detail</Text>
            </TouchableOpacity> */}
            <View style={styles.body}>
                {props.media_type === 'IMAGE' && <Image style={styles.bodyImage} source={{
                    uri: props.media_url,
                }} />}
                {props.media_type === 'VIDEO' && <Video style={styles.bodyImage} uri={props.media_url} />}
                <Text>{props.caption}</Text>
            </View>
            <Modal
                style={styles.modal}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}
                  ><MediaItemDetail {...props}></MediaItemDetail></Modal>
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
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderTopColor: '#ddd',
        borderTopWidth: 0.5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5,
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        overflow: 'hidden',
        width: '80%',
    },
    bodyImage: {
        resizeMode: 'contain',
        flex: 1,
        aspectRatio: 1,
        marginBottom: 10,
    },
    bodyVideo: {
        height: height,
        maxHeight: '400px'
    },
    modal: {
        flex: 1,
        margin: 50,
        padding: 5,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default MediaItem;
