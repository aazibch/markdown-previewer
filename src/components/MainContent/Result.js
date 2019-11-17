import React from 'react';

const result = (props) => {
    const marked = require("marked");
    const convertedHtml = marked(props.markdownContent);

    return (
        <div>
            <label className="text-uppercase text-info">Result:</label>
            <div id="result-content" className="p-2" dangerouslySetInnerHTML={{__html: convertedHtml}}></div>
        </div>
    );
}

export default result;