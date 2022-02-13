import React from "react";
import { View } from "react-native";

const Video = ({style, uri}) => (
  <View style={style}>
      <video controls autoPlay={true} muted={true}>
      <source src={uri}/>
      </video>
  </View>
);
export default Video;