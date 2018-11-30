import styled from 'styled-components';

const Breadcrumb = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: 600;
  width: calc(100vw - 10px);
  border-bottom: 1px solid black;
  padding-left: 10px;
`;

const BreadcrumbTitle = styled.div`
  font-weight: 400;
  height: 50px;
  display: flex;
  font-size: 1.3em;
  align-items: center;

  &::after {
  	content:'>';
  	text-align: right;
  	float: right;
  	margin: 0 10px;
  	font-weight: 600;
  	color: red;
  }
  &:last-child::after {
  	content: ''
  }

	a:link {
	    text-decoration: none;
	}

	a:visited {
	    text-decoration: none;
	}

	a:hover {
	    text-decoration: underline;
	}

	a:active {
	    text-decoration: underline;
	}


`;

export  {Breadcrumb, BreadcrumbTitle};
