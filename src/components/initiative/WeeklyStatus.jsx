import React, { Component } from 'react';
import styled from 'styled-components';
import {Route, Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbTitle} from '../styledComponents/Breadcrumb';
import {PageWrapper, ContentWrapper} from '../styledComponents/Wrapper'
import {DropdownButton, MenuItem} from 'react-bootstrap';
import PropTypes from 'prop-types';
import InitiativeMenuList from './InitiativeMenuList';
import InitiativeBasicInfo from './InitiativeBasicInfo';
import InitiativeStatusUpdate from './InitiativeStatusUpdate';
import FeatureList from './FeatureList';
import RiskList from './RiskList';

const Frame = styled.div`
  display: flex;
`;

const LeftFrame = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-right: 10px;
  min-height: calc(100vh - 120px)
`;

const RightFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 4;
`;

const TwoColumn = styled.div`
  display: flex;
  just-content: space-evenly;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5px;
  background-color: #FFF;
  flex: 1;
`

const RightColumn = styled.div`
  display: flex;
  flex:1;
  padding: 10px;
  margin: 5px;
  flex-direction: column;
  background-color: #FFF;
`

class WeeklyStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleInitiativeClick = this.handleInitiativeClick.bind(this);
  }

  handleInitiativeClick (id) {
    this.props.fetchInitiativeDetails(id)
  }

  render() {
    return (
      <PageWrapper>
        <Breadcrumb>
          <BreadcrumbTitle><Link to="/">Home</Link></BreadcrumbTitle>
          <BreadcrumbTitle>Weekly Status Update</BreadcrumbTitle>
        </Breadcrumb>
        <ContentWrapper>
          <Frame>
            <LeftFrame>
              <InitiativeMenuList initiatives={this.props.initiatives} onInitiativeClick={this.handleInitiativeClick} />
            </LeftFrame>
            <RightFrame>
              <TwoColumn>
                <LeftColumn>
                  <h2>{this.props.selectedInitiative.name}</h2>
                </LeftColumn>
              </TwoColumn>
              <TwoColumn>
                <LeftColumn>
                  <InitiativeBasicInfo initiative={this.props.selectedInitiative} />
                </LeftColumn>
                <RightColumn>
                  <InitiativeStatusUpdate initiative={this.props.selectedInitiative} />
                </RightColumn>                
              </TwoColumn>
              <TwoColumn>
                <LeftColumn>
                  <FeatureList initiative={this.props.selectedInitiative} onFeatureCreate={this.props.onFeatureCreate} />
                </LeftColumn>
              </TwoColumn>
              <TwoColumn>
                <LeftColumn>
                  <RiskList initiative={this.props.selectedInitiative} onRiskCreate={this.props.onRiskCreate} />
                </LeftColumn>
              </TwoColumn>
            </RightFrame>
          </Frame>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

WeeklyStatus.defaultProps = {
  initiatives: [],
  selectedInitiative: {}
};

WeeklyStatus.propTypes = {
  initiatives: PropTypes.array,
  selectedInitiative: PropTypes.object,
  fetchInitiativeDetails: PropTypes.func,
  onFeatureCreate: PropTypes.func,
  onRiskCreate: PropTypes.func,
};

export default WeeklyStatus;




