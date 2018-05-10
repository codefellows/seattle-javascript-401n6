import './reddit.scss';
import React from 'react'
import {connect} from 'react-redux';
import {downloadImages} from '../../actions/reddit-actions';

class Reddit extends React.Component {
  render() {
    return <React.Fragment>
      <h1>reddit</h1>
      <div>
        <button onClick={this.props.downloadImages}>download images</button>
      </div>
      {this.props.isSearching && this.props.isLoading ?
      <div>loading...</div> :
      this.props.images.map((img, i) => {
        return <img key={i} src={img} />
      })}
    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
    isSearching: state.reddit.isSearching,
    isLoading: state.reddit.isLoading,
    images: state.reddit.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    downloadImages: () => dispatch(downloadImages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);
