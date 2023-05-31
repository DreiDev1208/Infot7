import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './DashboardStyles';

const AssetInventory = () => {
  const navigation = useNavigation();

  const handleMenuPress = (menu) => {
    console.log('Menu pressed:', menu);
    if (menu === 'Dashboard') {
      navigation.navigate('Dashboard');
    } else if (menu === 'Asset Registration') {
      navigation.navigate('AssetRegistration');
    } else if (menu === 'Asset Allocation') {
      navigation.navigate('AssetAllocation');
    } else if (menu === 'Asset Transfer') {
      navigation.navigate('AssetTransfer');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ASSET INVENTORY</Text>
        <View style={styles.headerLine} />
      </View>

      <View style={styles.dashboardContainer}>
        <Text style={styles.subtitle}>Welcome to Asset Inventory!</Text>
      </View>

      <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Asset Registration')}>
            <Icon name="plus" size={24} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Asset Allocation')}>
            <Icon name="th-large" size={24} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Dashboard')}>
            <Icon name="dashboard" size={24} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Asset Transfer')}>
            <Icon name="exchange" size={24} color="#fff" style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress('Asset Inventory')}>
            <Icon name="list" size={24} color="#fff" style={style.assetInventory} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const style = StyleSheet.create({
  assetInventory: {
    display: 'flex',
    backgroundColor: '#f71d31',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AssetInventory;
