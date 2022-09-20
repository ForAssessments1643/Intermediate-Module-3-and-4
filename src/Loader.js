import React, { Component } from 'react';
import { View, Text, StyleSheet ,ActivityIndicator} from 'react-native';

const Loader = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="white" />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'blue',
        width: '100%',
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
});


export default Loader;
