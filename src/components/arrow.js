import React, { Component } from 'react';

class Arrow extends Component {

  toggleArrow = function() {
    {/*if(this.state.status) {
      //closes it
      document.getElementById('arrow').classlist.remove('arrow-closed');

    } else {
      //open
      document.getElementById('arrow').classlist.add('arrow-closed');
*/}
    document.getElementById(`${this.props.id}`).classList.toggle('arrow-closed');

    this.props.callback();
  }.bind(this);

  render() {
        return (
            <a id={this.props.id} onClick={() => this.toggleArrow()} className={`${this.props.className} arrow`}></a>
        )
    }
}

export default Arrow;
