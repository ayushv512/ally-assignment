import React, { useState, useEffect } from 'react';
import ObjectivesComponent from '../objectivescomponent/objectives.component';
import FilterComponent from '../filtercomponent/filter.component';
import { OKRComponentWrapper } from './style';
import { sampleOkrsUrl } from '../../config/config';
import axios from 'axios';

const OKRComponent = () => {
  const [okrsData, setOkrsData] = useState([]);
  useEffect(() => {
    axios
      .get(sampleOkrsUrl)
      .then(response => {
        console.log('okrsData', groupOkrsByParentObjectives(response.data.data));
        setOkrsData(groupOkrsByParentObjectives(response.data.data));
      })
      .catch(error => console.log('Error', error));
  }, []);

  const groupOkrsByParentObjectives = response => {
    return response.reduce((resultArr, currentItem) => {
      if (currentItem.parent_objective_id === '') {
        currentItem.child_objectives = [];
        currentItem.visible = true;
        currentItem.collapsed = false;
        currentItem.dropdown_class = 'fa fa-caret-down';
        resultArr.push(currentItem);
      } else {
        const parentObj = resultArr.find(
          item => item.id === currentItem.parent_objective_id
        );
        parentObj && parentObj.child_objectives.push(currentItem);
      }
      return resultArr;
    }, []);
  };

  const onParentDropDownHandler = parentItemId => {
    const okrsDataCopy = [...okrsData];
    const parentObj = okrsDataCopy.find(
      item => item.id === parentItemId
    );
    parentObj.collapsed = !parentObj.collapsed;
    parentObj.dropdown_class = (parentObj.dropdown_class === 'fa fa-caret-down') ? 'fa fa-caret-right' : 'fa fa-caret-down';
    setOkrsData(okrsDataCopy);
  };

  const onFilterChangeHandler = (event) => {
    const filterItem = event.target.value;
    const okrsDataCopy = [...okrsData];
    const filteredArr = okrsDataCopy.map((parentItem) => {
      parentItem.visible = (event.target.value === 'All' || parentItem.category === filterItem) || false;
      parentItem.collapsed = false;
      return parentItem;
    });
    console.log('filteredArr', filteredArr);
    setOkrsData(filteredArr);
  };

  return (
    <OKRComponentWrapper>
      <div className='okrs-container'>
        <div>OKRs</div>
        <FilterComponent
          okrsData={okrsData}
          onFilterChangeHandler={onFilterChangeHandler}
        />
      </div>
      {okrsData &&
        okrsData.map((parentItem, index) => {
          return (
            <ObjectivesComponent
              key={parentItem.id}
              parentItem={parentItem}
              index={index}
              onParentDropDownHandler={onParentDropDownHandler}
            />
          );
        })}
    </OKRComponentWrapper>
  );
};

export default OKRComponent;
