import React from 'react';
import { ParentObjective, ChildObjective } from './style';
import PropTypes from 'prop-types';

const ObjectivesComponent = (props) => {
  const { parentItem: { id, title, visible, collapsed, child_objectives: childObjectives, dropdown_class: dropDownClass }, onParentDropDownHandler, index } = props;
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
        <ParentObjective hidden={!visible}>
            <div className='parent-container'>
                <button
                    className='parent-dropdown'
                    onClick={() => onParentDropDownHandler(id)}
                >
                  <i
                      className={childObjectives.length === 0 ? 'fa fa-caret-right' : dropDownClass}
                      aria-hidden='true'
                  ></i>
                </button>
                <i className='fa fa-user-circle-o user-circle'></i>
                <div className='parent-title'>
                    {index + 1 + '. ' + title}
                </div>
            </div>
            <div hidden={collapsed}>
            {childObjectives.map((childItem, index) => {
              return (
                <ChildObjective key={id + '-' + childItem.id}>
                    <div className='horizantal-line'></div>
                    <i className='fa fa-user-circle-o'></i>
                    <div>{alphabetArr[index] + '. ' + childItem.title}</div>
                </ChildObjective>
              );
            })}
            </div>
        </ParentObjective>
  );
};

ObjectivesComponent.propTypes = {
  parentItem: PropTypes.object,
  index: PropTypes.number,
  onParentDropDownHandler: PropTypes.func
};

export default ObjectivesComponent;
