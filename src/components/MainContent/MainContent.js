import React, { Component } from 'react';
import Input from './Input';
import Result from './Result';

class MainContent extends Component {
    state = {
        markdownContent: "# Heading Level 1\r\n\r\n### Heading Level 3\r\n\r\n*This text is italic*.\r\n\r\n**This text is bold**.\r\n\r\nUnordered List:\r\n* Item 1\r\n* Item 2\r\n* Item 3\r\n\r\nOrdered List:\r\n1. Item 1\r\n1. Item 2\r\n1. Item 3\r\n\r\nAs Albert Einstein said:\r\n\r\n>\u201CNever memorize something that you can look up.\u201D"
    }

    markdownChangeHandler = (event) => {
      this.setState({markdownContent: event.target.value});
    }

    render() {
        return (
            <main className="mb-3">
                <div className="row">
                    <div className="col-md-6">
                        <Input markdownContent={this.state.markdownContent} changed={this.markdownChangeHandler} />
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