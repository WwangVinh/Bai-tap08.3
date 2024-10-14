import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Cài đặt icon thư viện
import backgroundSplash from './assets/backgroundSplash.png'; // Hình ảnh nền cho Splash
import backgroundHome from './assets/backgroundHome.png'; // Hình ảnh nền cho Home
import backgroundNotification from './assets/backgroundNotification.png'; // Hình ảnh nền cho Notifications
import backgroundScan from './assets/backgroundScan.png'; // Hình ảnh nền cho Scan
import backgroundPurchased from './assets/backgroundPurchased.png'; // Hình ảnh nền cho Purchased
import backgroundCart from './assets/backgroundCart.png'; // Hình ảnh nền cho Cart

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SplashScreen = ({ navigation }) => {
    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <ImageBackground source={backgroundSplash} style={{ flex: 1 }} resizeMode="cover">
            <TouchableOpacity style={{ flex: 1 }} onPress={navigateToHome}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 24 }}>Scan, Pay & Enjoy!</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const HomeScreen = () => (
    <ImageBackground source={backgroundHome} style={{ flex: 1 }} resizeMode="cover">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Không có văn bản hiển thị ở đây */}
        </View>
    </ImageBackground>
);

const NotificationScreen = () => (
    <ImageBackground source={backgroundNotification} style={{ flex: 1 }} resizeMode="cover">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Không có văn bản hiển thị ở đây */}
        </View>
    </ImageBackground>
);

const ScanScreen = () => (
    <ImageBackground source={backgroundScan} style={{ flex: 1 }} resizeMode="cover">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Không có văn bản hiển thị ở đây */}
        </View>
    </ImageBackground>
);

const PurchasedProductsScreen = () => (
    <ImageBackground source={backgroundPurchased} style={{ flex: 1 }} resizeMode="cover">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Không có văn bản hiển thị ở đây */}
        </View>
    </ImageBackground>
);

const CartScreen = () => (
    <ImageBackground source={backgroundCart} style={{ flex: 1 }} resizeMode="cover">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Không có văn bản hiển thị ở đây */}
        </View>
    </ImageBackground>
);

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="notifications" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="camera-alt" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Purchased"
                component={PurchasedProductsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping-basket" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping-cart" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Scan" component={ScanScreen} />
                <Stack.Screen name="Purchased" component={PurchasedProductsScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
