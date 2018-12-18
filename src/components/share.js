import React from 'react';

const share = () => {
		return(
			<div>
			<div id="share" className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/"
			data-layout="button" data-size="small" data-mobile-iframe="true">
			<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
			className="fb-xfbml-parse-ignore">Share</a></div>
			</div>
			);
}

export default share;