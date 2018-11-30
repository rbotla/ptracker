import React, { Component } from 'react';
import styled from 'styled-components';
import {Route, Link } from 'react-router-dom'
import InitiativeContainer from './components/initiative/InitiativeContainer';
import Home from './components/Home';

const BodyWrapper = styled.div`
  min-height: 100vh;
  background-color: #FAFAFA;
`;

const Header = styled.div`
  height: 50px;
  border-bottom: 2px solid black;
  background-color: gray;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #FFF;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 50px);
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class App extends Component {
  render() {
    return (
      <BodyWrapper>
        <Header>
          ESS Project Tracker
        </Header>
        <ContentWrapper>
          <Route exact path="/" component={Home}/>
          <Route path="/weekly" component={InitiativeContainer}/>
        </ContentWrapper>
      </BodyWrapper>
    );
  }
}

export default App;
