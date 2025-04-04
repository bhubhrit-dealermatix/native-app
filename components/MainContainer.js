/* eslint-disable react-native/no-inline-styles */
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const MainContainer = ({
  isHomeScreen = false,
  showHeader = true,
  showHeaderLeft = true,
  showHeaderRight = true,
  headerLeft = null,
  headerRight = null,
  title = '',
  headerFloatingView = null,
  children,
}) => {
  const [index, setIndex] = useState(0);
  const routes = headerFloatingView
    ? headerFloatingView.map((tab, i) => ({
      key: `tab-${i}`,
      title: tab.tabName,
    }))
    : [];

  const renderScene = headerFloatingView?.length
    ? SceneMap(
      headerFloatingView.reduce((acc, tab, i) => {
        acc[`tab-${i}`] = tab.components;
        return acc;
      }, {})
    )
    : () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>No tabs found</Text></View>;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        {showHeader &&
          <View style={[styles.header, { borderBottomLeftRadius: headerFloatingView ? 0 : 8, borderBottomRightRadius: headerFloatingView ? 0 : 8 }]}>
            {showHeaderLeft &&
              <View style={[styles.headerLeft, { flex: isHomeScreen ? 0.5 : 0.15 }]}>
                {isHomeScreen ? (
                  <View>
                    <Text>Welcome</Text>
                    <Text>Abhijeet Rana</Text>
                  </View>
                ) : headerLeft}
              </View>
            }
            {!isHomeScreen &&
              <View style={styles.headerCenter}>
                <Text style={styles.pageTitle}>{title}</Text>
              </View>
            }
            {showHeaderRight &&
              <View style={[styles.headerRight, { flex: isHomeScreen ? 0.5 : 0.15 }]}>
                {headerRight}
              </View>
            }
          </View>
        }
        {headerFloatingView && (
          <TabView
            style={styles.tabsViewStyle}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={props => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ marginHorizontal: 16 }}
              />
            )}
          />
        )}
        <View style={styles.mainContent}>
          <FlatList renderItem={() => children} nestedScrollEnabled data={['']} />
        </View>
      </View>
    </SafeAreaView >
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    // height: Dimensions.get('window').height,
    // overflow: 'scroll',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    height: 55,
    paddingHorizontal: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerCenter: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tabsViewStyle: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#333',
    height: 40,

  },
  mainContent: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
});
