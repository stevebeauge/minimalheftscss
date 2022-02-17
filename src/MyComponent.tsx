import * as React from 'react';
import styles from './MyComponent.module.scss';

const MyComponent: React.VFC = () => {
    return <div className={styles.title}>Hello world</div>;
};

export default MyComponent;