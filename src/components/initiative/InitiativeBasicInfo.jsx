import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const GridItem = styled.div`
  display: flex;
`

const GridItemName = styled.div`
  padding: 10px 5px;
`

const GridItemValue = styled.div`
  padding: 0 0 10px 0px;  
`

class InitiativeBasicInfo extends Component {
  render() {
    return (
      <Grid>
        <GridItem>
          <GridItemValue style={{'fontWeight': 600}}>Initiative Details</GridItemValue>
        </GridItem>
        <GridItem>
          <GridItemValue>{this.props.initiative.description}</GridItemValue>
        </GridItem>
      </Grid>
    );
  }
}

InitiativeBasicInfo.defaultProps = {
  initiative: {}
};

InitiativeBasicInfo.propTypes = {
  initiative: PropTypes.object
};

export default InitiativeBasicInfo;
