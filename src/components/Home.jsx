import React, { Component } from 'react';
import styled from 'styled-components';
import {Route, Link } from 'react-router-dom'
import {Breadcrumb, BreadcrumbTitle} from './styledComponents/Breadcrumb'
import {PageWrapper, ContentWrapper} from './styledComponents/Wrapper'
import {CardsWrapper, Card} from './styledComponents/CardsWrapper';

class Home extends Component {
  render() {
    return (
      <PageWrapper>
        <Breadcrumb>
          <BreadcrumbTitle><Link to="/">Home</Link></BreadcrumbTitle>
        </Breadcrumb>
        <ContentWrapper>
          <CardsWrapper>
            <Link to="/"><Card>Dashboards</Card></Link>
            <Link to="/"><Card>Initiatives</Card></Link>
            <Link to="/weekly"><Card>Weekly Status Updates</Card></Link>
            <Link to="/"><Card>Communication Subscription</Card></Link>
          </CardsWrapper>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

export default Home;
