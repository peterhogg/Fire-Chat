import React from 'react';
import ReactDOM from 'react-dom';
import Chatbox from './index';
import renderer from 'react-test-renderer';

describe('chatbox', () =>{
	
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Chatbox />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('has a valid snapshot', () =>{
		const component = renderer.create(
			<Chatbox />
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	})

})
