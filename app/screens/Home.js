import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {HorizontalScrollTabs} from 'app/components';
import styled from 'styled-components/native';
import {OFFERS, VERTICAL_SCROLL_TABS} from 'app/constants';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(VERTICAL_SCROLL_TABS[0]);
  const [tabContent, setTabContent] = useState(OFFERS['bestOffersForYou']);

  function setSelectedTab(tab, selectedIndex) {
    setSelectedItem(tab);
    setTabContent(OFFERS[tab?.title]);
  }

  function renderVerticalTabs() {
    return (
      <>
        <HorizontalScrollTabs
          tabs={VERTICAL_SCROLL_TABS}
          selectedItem={selectedItem}
          setSelectedTab={setSelectedTab}
        />
        <TabsLine />
      </>
    );
  }

  function selectButton() {
    return (
      <SelectWrapper onPress={() => {}}>
        <Text style={{color: '#f1800d'}}>Select</Text>
      </SelectWrapper>
    );
  }

  function renderAmountAndSelect({amount}) {
    return (
      <AmountSelectWrapper>
        <Text style={{color: '#263238', fontSize: 18, fontWeight: '400'}}>
          {amount}
        </Text>
        {selectButton()}
      </AmountSelectWrapper>
    );
  }

  function renderValidityAndData({validity, data}) {
    return (
      <ValidityDataWrapper>
        <Text>Validity: {validity}</Text>
        {data && <Text style={{marginLeft: 22}}>Data: {validity}</Text>}
      </ValidityDataWrapper>
    );
  }

  function renderDescription({description}) {
    return (
      <DescriptionWrapper>
        <Text>{description}</Text>
      </DescriptionWrapper>
    );
  }

  function renderTabContent() {
    return tabContent?.map((tabDetails, index) => {
      return (
        <View style={{marginHorizontal: 35, marginTop: 17}} key={index}>
          {renderAmountAndSelect(tabDetails)}
          {renderValidityAndData(tabDetails)}
          {renderDescription(tabDetails)}
          <OfferLine />
        </View>
      );
    });
  }

  function renderScreenTitle() {
    return (
      <ScreenTitleWrapper>
        <Text style={{color: '#F1800D', fontSize: 18, fontWeight: '600'}}>
          Browse Plans
        </Text>
        <Text style={{fontSize: 16, marginTop: 5}}>for Airtel Kolkata</Text>
      </ScreenTitleWrapper>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      {renderScreenTitle()}
      {renderVerticalTabs()}
      {renderTabContent()}
    </View>
  );
}

const AmountSelectWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SelectWrapper = styled.TouchableOpacity`
  padding: 3px 20px 3px 20px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #f1800d;
`;

const ValidityDataWrapper = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

const DescriptionWrapper = styled.View`
  margin-top: 8px;
`;

const OfferLine = styled.View`
  height: 1px;
  margin-top: 15px;
  background-color: #979797;
`;

const TabsLine = styled.View`
  height: 1px;
  background-color: #979797;
`;

const ScreenTitleWrapper = styled.View`
  margin: 30px 35px 30px 35px;
`;
