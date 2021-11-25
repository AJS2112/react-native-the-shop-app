import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={userProducts}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => { }}
                >
                    <Button color={Colors.primary} title="Edit" onPress={() => {

                    }} />
                    <Button color={Colors.primary} title="Delete" onPress={() => {
                        dispatch(productsActions.deleteProduct(itemData.item.id));
                    }} />
                </ProductItem>
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