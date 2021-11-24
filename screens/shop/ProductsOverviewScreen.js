import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            renderItem={itemData => <Text>{itemData.item.title}</Text>}
        />

    )
}

const styles = StyleSheet.create({

});

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen;