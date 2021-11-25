import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from "../../components/UI/HeaderButton";

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts)
    return (
        <FlatList
            data={userProducts}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => { }}
                    onAddToCart={() => { }}
                />
            }
        />
    )
};

UserProductScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName={'md-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>),
    }
}

const styles = StyleSheet.create({

});

export default UserProductScreen;