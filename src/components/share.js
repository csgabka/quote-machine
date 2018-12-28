import React from 'react';
import SVG from './img/twitter.svg'

const share = ({quoteText, quoteAuthor}) => {
		return(
			<div>
			<a className="twitter-share-button" id="tweet" href={"https://twitter.com/intent/tweet?text="
			 + quoteText + " - " + quoteAuthor}><img alt="share-on-twitter" id="twitter" src={SVG}/></a>
			</div>
			);
}

export default share;