import React from 'react';
import CSSModules from 'react-css-modules';
import <%=componentName%>Style from './assets/<%=componentName%>.scss';


class <%=componentName%> extends React.Component {

	constructor (props) {

		super(props);
		
	}

	
	

	render () {

		return (
			<div>
				This is the <%=componentName%>
			</div>
			);
	}
}

export default CSSModules(<%= componentName %>, <%=componentName%>Style);
