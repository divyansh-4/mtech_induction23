import React from 'react';
import './Table.css'
import P from '../bgassets/P.svg'
import H from '../bgassets/H.svg'
import M from '../bgassets/M.svg'
import T from '../bgassets/T.svg'
import D from '../bgassets/D.svg'

const Table = ({ sched }) => {
  return (
    <div className="tableclass">
      <table className="tableclass">
      <tbody>
        {sched.map((day, index) => {
          const { time, event } = day;
          return (
            <tr className="schedule table" key={index}>
              <td className='leftrow  '>{time}</td>
              <td className='rightrow '>{event}</td>
            </tr>
          );
        })}
      </tbody>
    </table>

        </div>
  );
};

export default Table;
