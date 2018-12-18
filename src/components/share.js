import React from 'react';
import SVG from './img/twitter.svg'

const share = ({quoteText, quoteAuthor}) => {
		return(
			<div>
			<a class="twitter-share-button" id="tweet" href={"https://twitter.com/intent/tweet?text="
			 + quoteText + " - " + quoteAuthor}><img id="twitter" src={SVG}/></a>
			</div>
			);
}

export default share;