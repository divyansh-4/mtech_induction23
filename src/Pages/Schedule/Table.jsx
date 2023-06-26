import React from 'react';
import './Table.css'

const Table = ({ sched }) => {
  return (
    <table className="tableclass ml-[50px]">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sched.map((day, index) => {
          const { time, event } = day;

          return (
            <tr className="sct" key={index}>
              <td className='leftrow pb-[16px] '>{time}</td>
              <td className='rightrow   pb-[16px] pl-[80px]'>{event}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
