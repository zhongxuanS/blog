import React from 'react';
/**
 * 1. 支持loading
 * 2. 支持error image
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
    const { src, loading, loadFailed } = this.props;
    const imgProps = {
      src: src
    }

    if (!this.img) return null;

    if (isLoaded) {
      return <img {...imgProps} alt="postMedia" />;
    }

    if (!isLoaded && isLoading) {
      return loading ? loading : <div>载入中...</div>;
    }

    if (!isLoaded && !isLoading) {
      return loadFailed ? loadFailed : <div>载入图片失败</div>
    }
  }
}

export default Img;