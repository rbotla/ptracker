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
import ReleaseList from './ReleaseList';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
  flex:1;
`

const RightColumn = styled.div`
  display: flex;
  padding: 10px;
  margin: 5px;
  flex-direction: column;
  background-color: #FFF;
  flex: 1;
`

class Initiative extends Component {
  constructor(props) {
    super(props);
    this.handleInitiativeClick = this.handleInitiativeClick.bind(this);
  }

  state = {
    tabValue: 0,
  };

  handleChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleInitiativeClick (id) {
    this.props.fetchInitiativeDetails(id)
  }

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;

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
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs value={tabValue} onChange={this.handleChange}>
                    <Tab label="Status" />
                    <Tab label="Releases" />
                    <Tab label="Features" />
                    <Tab label="Risks" />
                    <Tab label="Dependencies" />
                    <Tab label="Discuss" />
                  </Tabs>
                </AppBar>
                {tabValue === 0 && <TabContainer>
                  <TwoColumn>
                      <LeftColumn>
                        <InitiativeBasicInfo initiative={this.props.selectedInitiative} />
                      </LeftColumn>
                      <RightColumn>
                        <InitiativeStatusUpdate initiative={this.props.selectedInitiative} />
                      </RightColumn>
                  </TwoColumn>
                  </TabContainer>}
                {tabValue === 1 && <TabContainer>
                      <ReleaseList initiative={this.props.selectedInitiative} onReleaseCreate={this.props.onReleaseCreate} />
                  </TabContainer>}
                {tabValue === 2 && <TabContainer>
                      <FeatureList initiative={this.props.selectedInitiative} onFeatureCreate={this.props.onFeatureCreate} />
                  </TabContainer>}
                {tabValue === 3 && <TabContainer>
                      <RiskList initiative={this.props.selectedInitiative} onRiskCreate={this.props.onRiskCreate} />
                  </TabContainer>}
                {tabValue === 4 && <TabContainer>
                      Dependencies
                  </TabContainer>}
                {tabValue === 5 && <TabContainer>
                      Discuss
                  </TabContainer>}
              </div>
            </RightFrame>
          </Frame>
        </ContentWrapper>
      </PageWrapper>


    );
  }
}


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

Initiative.defaultProps = {
  initiatives: [],
  selectedInitiative: {}
};

Initiative.propTypes = {
  initiatives: PropTypes.array,
  selectedInitiative: PropTypes.object,
  fetchInitiativeDetails: PropTypes.func,
  onFeatureCreate: PropTypes.func,
  onRiskCreate: PropTypes.func,
  onReleaseCreate: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Initiative);




