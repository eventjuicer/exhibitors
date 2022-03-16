import React from 'react';
import ReactDOM from 'react-dom';
/*

<Shadow mode="open">
  <h1>Hello World</h1>
</Shadow>

*/
class Shadow extends React.Component {
  componentDidMount() {
    this.shadowRoot = this.node.attachShadow({ mode: this.props.mode });
    this.forceUpdate();
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <div {...rest} ref={node => (this.node = node)}>
        {this.shadowRoot && ReactDOM.createPortal(children, this.shadowRoot)}
      </div>
    );
  }
}

export default Shadow;
