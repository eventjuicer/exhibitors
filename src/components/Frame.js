import React from 'react';
import ReactDOM from 'react-dom';
/*

<Frame head={<title>Hello World</title>}>
  <h1>Hello World</h1>
</Frame>

*/

/*

https://gist.github.com/robertgonzales/b1966af8d2a428a8299663b92fb2fe03


*/

class Frame extends React.Component {
  componentDidMount() {
    this.iframeHead = this.node.contentDocument.head;
    this.iframeRoot = this.node.contentDocument.body;

    this.forceUpdate();
  }

  render() {
    const { children, head, ...rest } = this.props;
    return (
      <iframe {...rest} ref={node => (this.node = node)}>
        {this.iframeHead && ReactDOM.createPortal(head, this.iframeHead)}
        {this.iframeRoot && ReactDOM.createPortal(children, this.iframeRoot)}
      </iframe>
    );
  }
}

export default Frame;
