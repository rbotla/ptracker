import React from 'react';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';

import Task from './Task';

const Container = styled.div`
	margin: 8px;
	border: 1px solid lightgrey;
	background-color: white;
	border-radius: 2px;
	width: 220px;

	display: flex;
	flex-direction: column;
`;
const Title = styled.h3`
	padding: 8px;

`;
const TaskList = styled.div`
	padding: 8px;
	transition: background-color 0.2s ease;
	background-color: ${props => props.isDraggingOver ? 'skyblue' : 'white'}
	flex-grow: 1;
	min-height: 100px;
`;

class Column extends React.Component {
	render () {
		return (
			<Draggable draggableId={this.props.column.id} index={this.props.index}>
				{(provided) => (
					<Container {...provided.draggableProps} innerRef={provided.innerRef} >
						<Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
						<Droppable droppableId={this.props.column.id} 
							type="task"
							isDropDisabled={this.props.isDropDisabled}>
							{(provided1:provided, snapshot) => (
								<TaskList
									innerRef={provided1.innerRef}
									{...provided1.droppableProps}
									isDraggingOver={snapshot.isDraggingOver}
								>
									{this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
									{provided1.placeholder}
								</TaskList>

							)}
						</Droppable>
					</Container>
				)}
			</Draggable>
		)
	}
}

export default Column;