import React from 'react';

const share = ({quoteText, quoteAuthor}) => {
		return(
			<div>
			<a class="twitter-share-button" id="tweet" href={"https://twitter.com/intent/tweet?text="
			 + quoteText + " - " + quoteAuthor}>Tweet</a>
			</div>
			);
}

export default share;