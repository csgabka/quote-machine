import React from 'react';

const button = ({loadNewQuote}) => {
		return(
			<button id="new-quote" className="btn btn-dark" onClick={loadNewQuote}>Get a new quote</button>
			);
}

export default button;