import './searchbar.scss';
import {useEffect, useState} from 'react';
import { searchAction } from '../../actions/SearchActions';
import autoAttributes from "../../util/autoAttributes";

export const Searchbar = (props:any) => {

  const [searchValue, searchActionValue] = useState('');
  const [selectedParameter, setSelectedParameter] = useState('id');

  const handleInputChange = (event:any) => {
    searchActionValue(event.target.value);
  };

  const handleParameterSelect = (event:any) => {
    setSelectedParameter(event.target.value);
  };

  const handleSubmit = async (event?:any) => {
    event?.preventDefault();
    await searchAction(searchValue, selectedParameter, props.setAllAutos);
  };

  // send initial request
  useEffect(() => {
    handleSubmit()
  }, [selectedParameter, searchValue]);

  return (
      <form className='searchbar-form' onSubmit={handleSubmit}>
        <div className='searchbar-container'>
          <input
              type='text'
              placeholder='Search...'
              className='searchbar-input'
              value={searchValue}
              onChange={handleInputChange}
          />
          <div className='searchbar--parameter'>
            <select
                value={selectedParameter}
                onChange={handleParameterSelect}
                className='dropdown-select'
            >
              {autoAttributes.map((parameter: string) => (
                  <option key={parameter} value={parameter}>
                    {parameter}
                  </option>
              ))}
            </select>
          </div>
          <button type='submit' className='search-button'>
            Suchen
          </button>
        </div>
      </form>
  );
};

