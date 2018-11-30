import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	margin-bottom: 8px;
	background-color: ${props => 
		props.isDragDisabled
			? 'lightgrey' 
			: props.isDragging 
			  ? 'lightgreen' 
			  : 'white'};
	display: flex;
`;

const Handle = styled.div`
	background-color: gray;
	border-radius: 2px;
	width: 5px;
`;

const Content = styled.div`
	padding: 8px;
`;

class Task extends React.Component {
	render () {
		const isDragDisabled = this.props.task.id === 'task-1';
		return (
			<Draggable 
				draggableId={this.props.task.id}
				index={this.props.index}
				isDragDisabled={isDragDisabled}
			>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						innerRef={provided.innerRef}
						isDragging={snapshot.isDragging}
						isDragDisabled={isDragDisabled}
					>
						<Handle {...provided.dragHandleProps}/>
						<Content>{this.props.task.content}</Content>
					</Container>
				)}
			</Draggable>
		)
	}
}

export default Task;