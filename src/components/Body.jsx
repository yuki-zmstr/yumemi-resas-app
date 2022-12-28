import React, { useState } from 'react';
import ChoosePrefectures from './ChoosePrefectures';
import PopulationGraph from './PopulationGraph';

const Body = () => {
  const [selections, setSelections] = useState([]);

  const addPrefectureHandler = (prefCode) => {
    setSelections((prevSelections) => [...prevSelections, prefCode]);
  };

  const removePrefectureHandler = (prefCode) => {
    setSelections((prevSelections) => {
      return prevSelections.filter((prefecture) => prefecture !== prefCode);
    });
  };

  return (
    <>
      <ChoosePrefectures
        onAddPrefecture={(prefCode) => addPrefectureHandler(prefCode)}
        onRemovePrefecture={(prefCode) => removePrefectureHandler(prefCode)}
      />
      <PopulationGraph />
    </>
  );
};

export default Body;
