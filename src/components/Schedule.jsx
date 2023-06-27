import React, { useState} from 'react'
import { useEffect } from 'react';
import Table from './Table';

const API = "https://sheet.best/api/sheets/359e1172-7650-49b5-a418-8caaaf5f5ef3";


const Schedule = () => {
    const [sched,setSched]=useState([]);
    const fetchUsers = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          if (data.length > 0) {
            setSched(data);
          }
        } catch (e) {
          console.error(e);
        }
      };
      
      useEffect(() => {
        fetchUsers(API);
      }, []);
    return (
    
        <div className='bg-[#FFD0D0]'>
            <Table sched={sched}/>
            </div>
    )
}

export default Schedule