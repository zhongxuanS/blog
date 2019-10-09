import React from 'react';
import styles from './timeline.module.css';
import { Timeline } from 'antd';


class TimeLine extends React.Component {
  render() {
    return (
      <div className={styles.timelineWrapper}>
        <Timeline>
          <Timeline.Item className={styles.timelineItem}>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default TimeLine;