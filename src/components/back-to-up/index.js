import React from 'react';
import styles from './BackToUp.module.css';

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BackToUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNeedShowBackToUp: false,
      timer: null
    }

    this.onScrollHander = this.onScrollHander.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHander);
  }

  onScrollHander() {
    const scrollTop = document.documentElement.scrollTop;
    const isNeedShowBackToUp = scrollTop >= 100 ? true : false;
    this.setState({
      isNeedShowBackToUp: isNeedShowBackToUp
    })
  }

  onClickHandler() {
    cancelAnimationFrame(this.timer);
    //获取当前毫秒数
    const startTime = +new Date();
    //获取当前页面的滚动高度
    const distanceToTop = document.body.scrollTop || document.documentElement.scrollTop;
    const dur = 500;
    const currentDisTanceToTop = distanceToTop;

    const self = this;
    this.timer = requestAnimationFrame(function func() {
      const t = dur - Math.max(0, startTime - (+new Date()) + dur);
      document.documentElement.scrollTop = document.body.scrollTop = t * (-currentDisTanceToTop) / dur + distanceToTop;
      self.timer = requestAnimationFrame(func);
      if (t === dur) {
        cancelAnimationFrame(self.timer);
        self.setState({ isNeedShowBackToUp: false });
      }
    });
  }

  render() {
    const { isNeedShowBackToUp } = this.state;
    const element = isNeedShowBackToUp ?
      <div className={styles.backToUp} onClick={this.onClickHandler}>
        <FontAwesomeIcon icon={faChevronUp} size="1x" color="white" className={styles.backToUpIcon} />
      </div > : null;
    return (element);
  }
}

export default BackToUp;
