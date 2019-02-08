import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './index';
import renderer from 'react-test-renderer';

describe('chat', () =>{
	
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Chat />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

})
