import styled from 'styled-components';

const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: auto;	
	flex-wrap: wrap;

	a {
		text-decoration: none;
	}
`;

const Card = styled.div`
	display: flex;
	width: 15rem;
	height: 2rem;
	margin: 10px;
	border: 1px solid black;
	border-radius: 3%;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #FFF;
	}
`;

export {CardsWrapper, Card};