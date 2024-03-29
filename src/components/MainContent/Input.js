import React from 'react';

const input = (props) => (
  <div className="form-group">
    <label className="text-uppercase text-info" htmlFor="editor">
      Markdown:
    </label>
    <textarea
      id="editor"
      className="form-control rounded-0"
      value={props.markdownContent}
      onChange={props.changed}
    ></textarea>
  </div>
);

export default input;
