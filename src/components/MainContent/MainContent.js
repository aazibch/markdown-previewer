import React, { Component } from 'react';
import Input from './Input';
import Result from './Result';

class MainContent extends Component {
  state = {
    // markdownContent: "# Heading Level 1\r\n\r\n### Heading Level 3\r\n\r\n*This text is italic*.\r\n\r\n**This text is bold**.\r\n\r\nUnordered List:\r\n* Item 1\r\n* Item 2\r\n* Item 3\r\n\r\nOrdered List:\r\n1. Item 1\r\n1. Item 2\r\n1. Item 3\r\n\r\nAs Albert Einstein said:\r\n\r\n>\u201CNever memorize something that you can look up.\u201D",
    markdownContent:
      '# Heading Level 1\r\n\r\n## Heading Level 2\r\n\r\nInline code is this `<div></div>`.\r\n\r\nCode block:\r\n\r\n```\r\nconst myFunc = () => {\r\n console.log(\'This is my function.\');\r\n}\r\n```\r\nThis is a [link](https://www.google.com/) to Google.\r\n\r\n*This text is italic*.\r\n\r\n**This text is bold**.\r\n\r\nUnordered List:\r\n* Item 1\r\n* Item 2\r\n* Item 3\r\n\r\nOrdered List:\r\n1. Item 1\r\n1. Item 2\r\n1. Item 3\r\n\r\nAs Albert Einstein said:\r\n\r\n>\u201CNever memorize something that you can look up.\u201D\r\n\r\nThis is the Tesla logo:\r\n\r\n![Logo of Tesla Motors](https://res.cloudinary.com/aazibch/image/upload/c_scale,w_245/v1632564002/Project%20Files/Markdown%20Previewer/tesla-logo.png "Logo of Tesla Motors")'
  };

  markdownChangeHandler = (event) => {
    this.setState({ markdownContent: event.target.value });
  };

  render() {
    return (
      <main className="mb-3">
        <div className="row">
          <div className="col-md-6">
            <Input
              markdownContent={this.state.markdownContent}
              changed={this.markdownChangeHandler}
            />
          </div>
          <div className="col-md-6">
            <Result markdownContent={this.state.markdownContent} />
          </div>
        </div>
      </main>
    );
  }
}

export default MainContent;
