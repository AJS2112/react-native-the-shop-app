import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from '../../components/shop/ProductItem';
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id });
    }
    const deleteProductHandler = (id) => {
        Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
            { text: 'No', style: 'default' },
            {
                text: 'Yes', style: 'destructive', onPress: () => {
                    dispatch(productsActions.deleteProduct(id))
                }
            }
        ]);
    }


    if (userProducts.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No products found!</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={userProducts}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => { editProductHandler(itemData.item.id) }}
                >
                    <Button color={Colors.primary} title="Edit" onPress={() => {
                        editProductHandler(itemData.item.id);
                    }} />
                    <Button
                        color={Colors.primary}
                        title="Delete"
                        onPress={deleteProductHandler.bind(this, itemData.item.id)}
                    />
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
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Add'
                    iconName={'md-create'}
                    onPress={() => {
                        navData.navigation.navigate('EditProduct');
                    }}
                />
            </HeaderButtons>),
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UserProductScreen;