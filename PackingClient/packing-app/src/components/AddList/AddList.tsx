import React, { FC, useEffect, useState } from 'react';
import axios from 'axios'
import './AddList.scss';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
interface AddListProps {}

const AddList= () => {
  const [cities,setCities]=useState<{name:string;id:string}[]>([]) ;
 

  const handleOnSearch = (string:any, results:any) => {
  console.log(string, results);
  }

  const handleOnHover = (result:any) => {
    console.log(result);
  }

  const handleOnSelect = (item:any) => {
    console.log(item);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
  useEffect(()=>{
    axios.get('https://countriesnow.space/api/v0.1/countries/capital')
    .then(
      city=>{
       console.log(city);
        setCities(city.data.data);
        // .map((c: { name: any;})=>c.name)
      })
  },[])
  return(
  <div className="AddList">
    AddList Component
   <div style={{ marginBottom: 20 }}>select your destination</div>
          <ReactSearchAutocomplete
            items={cities}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            styling={{ zIndex: 4 }} // To display it on top of the search box below
            autoFocus
          />
  </div>)
};

export default AddList;




