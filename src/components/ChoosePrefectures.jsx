import React, { useState } from 'react';

import regionData from '../utils/regionData';

import styles from '../stylesheets/ChoosePrefectures.module.css';

const ChoosePrefectures = () => {
  const [preLoadMessage, setPreLoadMessage] = useState('Loading prefectures...');
  return (
    <fieldset className={styles.fieldset}>
      <legend>都道府県</legend>
      <div>
        <p>{preLoadMessage}</p>
        {/* {Object.keys(regionData).map((key) => (
          <div key={key}>
            <h3 className={styles.region}>{key}</h3>
            <div className={styles.prefectureSelections}>{filterPrefecture(key)}</div>
          </div>
        ))} */}
      </div>
    </fieldset>
  );
};

export default ChoosePrefectures;
