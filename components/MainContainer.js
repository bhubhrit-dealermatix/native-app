/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

const MainContainer = ({
  isHomeScreen = false,
  showHeader = true,
  showHeaderLeft = true,
  showHeaderRight = true,
  headerLeft = null,
  headerRight = null,
  title = '',
  components = null,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        {showHeader &&
          <View style={styles.header}>
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
        <View style={styles.mainContent}>
          {components}
        </View>
      </View>
    </SafeAreaView>
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
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
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
  mainContent: {
    padding: 16,
    paddingBottom: 0,
  },
});
