import React from 'react';
import PropTypes from "prop-types";

import styles from './Image.module.css';
/**
 * 1. 支持loading: loading
 * 2. 支持error image: loadFailed
 * 3. 自定义图片src: src
 */
class Img extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isLoaded: false
    }

    this.loadImage = this.loadImage.bind(this);
    this.unloadImage = this.unloadImage.bind(this);
    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  loadImage() {
    const { src } = this.props;
    this.img = new Image();
    this.img.onload = this.onLoad;
    this.img.onerror = this.onError;

    this.img.src = src;
  }

  unloadImage() {
    this.img.onerror = null;
    this.img.onload = null;
    this.img.src = '';
    delete this.img;
  }

  onLoad() {
    if (this.img) this.setState({ isLoaded: true, isLoading: false });
  }

  onError() {
    if (this.img) {
      this.setState({
        isLoaded: false,
        isLoading: false
      });
    }
  }

  componentDidMount() {
    const { isLoading } = this.state;
    if (isLoading) {
      this.loadImage();
    }
  }

  componentWillUnmount() {
    if (this.img) this.unloadImage();
  }

  render() {
    const { isLoaded, isLoading } = this.state;
    const { src, className, Loading, LoadFailed, alt, style, width, height } = this.props;

    if (!this.img) return null;

    if (isLoaded) {
      return <img
        src={src}
        className={className}
        width={width}
        height={height}
        style={{ ...styles, style }}
        alt={alt} />;
    }

    if (!isLoaded && isLoading) {
      return <Loading />;
    }

    if (!isLoaded && !isLoading) {
      return <LoadFailed />;
    }
  }
}


Img.defaultProps = {
  src: null,
  className: null,
  width: '100%',
  height: '100%',
  alt: '图片下载失败',
  style: {},
  Loading: <div>载入中...</div>,
  LoadFailed: <div>载入图片失败</div>
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  style: PropTypes.object,
  Loading: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  LoadFailed: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
}




export default Img;