import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styled from 'styled-components/native';

export default function HorizontalScrollTabs({
  tabs,
  selectedItem,
  setSelectedTab,
}) {
  function renderTabs() {
    function renderTabName(tab, index) {
      const {id, name} = tab;
      const activeTab = selectedItem?.id === id;
      const selectedColor = activeTab ? '#000000' : '#808080';
      return (
        <Tabs onPress={() => setSelectedTab(tab, index)}>
          <Text style={{color: selectedColor}}>{name}</Text>
          {activeTab && <Line />}
        </Tabs>
      );
    }
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TabsWrapper>
          {tabs.map((item, index) => {
            return (
              <View
                style={{
                  marginRight: 25,
                }}
                key={index}>
                {renderTabName(item, index)}
              </View>
            );
          })}
        </TabsWrapper>
      </ScrollView>
    );
  }

  return <Container>{renderTabs()}</Container>;
}
const Container = styled.View`
  background-color: #ffffff;
  width: 100%;
`;
const TabsWrapper = styled.View`
  flex-direction: row;
  padding-top: 11px;
  padding-left: 35px;
  background-color: #ffffff;
`;

const Tabs = styled.TouchableOpacity``;

const Line = styled.View`
  height: 4px;
  background-color: #f1800d;
  margin-top: 5px;
  border-radius: 1px;
`;
