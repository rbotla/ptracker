import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InitList = styled.div`
  display: flex;
  flex-direction: column;
`
const InitListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px 0;
  min-height: 30px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: #FFF
  }

  &.selected {
    background-color: gray;
    color: #FFF;
  }
`;

class InitiativeMenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: this.props.initiatives && this.props.initiatives[0].id
    }
    this.onInitClick = this.onInitClick.bind(this);
    this.props.initiatives && this.props.onInitiativeClick(this.props.initiatives[0].id);   // onLoad select default id
  }

  onInitClick (id) {
    this.setState({selectedId: id},
        this.props.onInitiativeClick(id))
  }

  render() {
    return (
      <InitList>
      {
        this.props.initiatives && this.props.initiatives.map( (x, key) => {
          return (
            <InitListItem 
              key={key} 
              onClick={() => this.onInitClick(x.id)}
              className={this.state.selectedId === x.id ? 'selected' : null}
              >
            {x.name}
            </InitListItem>
          )
        })
      }
      </InitList>
    );
  }
}

InitiativeMenuList.defaultProps = {
  initiatives: []
};

InitiativeMenuList.propTypes = {
  initiatives: PropTypes.array,
  onInitiativeClick: PropTypes.func
};

export default InitiativeMenuList;
