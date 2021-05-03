import React, { useState, useEffect } from 'react';
import ObjectivesComponent from '../objectives-component/objectives.component';
import FilterComponent from '../filter-component/filter.component';
import ErrorBoundaryComponent from '../error-boundary/errorboundary.component';
import { OKRComponentWrapper } from './style';
import { sampleOkrsUrl, enums } from '../../config/config';
import Loader from '../../assets/loader.gif';
import axios from 'axios';

const OKRComponent = () => {
  const [okrsData, setOkrsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(sampleOkrsUrl)
      .then(response => {
        console.log('okrsData', groupOkrsByParentObjectives(response.data.data));
        setIsLoading(false);
        setOkrsData(groupOkrsByParentObjectives(response.data.data));
      })
      .catch(error => console.log('Error:', error));
  }, []);
  // The function below changes the JSON structure and group OKRs By ParentObjectives.
  // Add four keys to all objects
  // 1. child_objectives(Array) - to map child objectives to parent objectives
  // 2. visible(Boolean)- to handle visibility of parent objectives
  // 3. collapsed(Boolean) - to handle dropdown active or collapse states
  // 4. dropdown_class(String) - to toggle dropdown button class
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
  // The function below handles dropdown active and collapse states
  const onParentDropDownHandler = parentItemId => {
    const okrsDataCopy = [...okrsData];
    const parentObj = okrsDataCopy.find(
      item => item.id === parentItemId
    );
    parentObj.collapsed = !parentObj.collapsed;
    parentObj.dropdown_class = (parentObj.dropdown_class === 'fa fa-caret-down') ? 'fa fa-caret-right' : 'fa fa-caret-down';
    setOkrsData(okrsDataCopy);
  };
  // The function below handles category filter change
  const onFilterChangeHandler = (event) => {
    const filterItem = event.target.value;
    const okrsDataCopy = [...okrsData];
    const filteredArr = okrsDataCopy.map((parentItem) => {
      parentItem.visible = (event.target.value === enums.FILTER_ALL || parentItem.category === filterItem) || false;
      parentItem.collapsed = false;
      parentItem.dropdown_class = 'fa fa-caret-down';
      return parentItem;
    });
    console.log('filteredArr', filteredArr);
    setOkrsData(filteredArr);
  };

  return (
    <OKRComponentWrapper>
      <div className='okrs-container'>
        <div>{enums.OKRS_TITLE}</div>
        <FilterComponent
          okrsData={okrsData}
          onFilterChangeHandler={onFilterChangeHandler}
        />
      </div>
      {isLoading
        ? <div className="loader"><img src={Loader} /></div>
        : <ErrorBoundaryComponent>
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
              })
            }
            </ErrorBoundaryComponent>
        }
    </OKRComponentWrapper>
  );
};

export default OKRComponent;
