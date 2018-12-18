import React from 'react';

const textBox = ({quoteText, quoteAuthor}) => {
		return(
			<div>
			<div className="card">
				  <div className="card-header">
				    Quote
				  </div>
				  <div className="card-body">
				    <blockquote className="blockquote mb-0">
				      <p id="text">{quoteText}</p>
				      <footer id="author" className="blockquote-footer">{quoteAuthor}</footer>
				    </blockquote>
				  </div>
			</div>
	        </div>
			);
}

export default textBox;