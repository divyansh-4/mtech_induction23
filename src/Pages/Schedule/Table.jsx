import React from 'react';
import './Table.css'
import P from '../Pages/bgassets/P.svg'
import H from '../Pages/bgassets/H.svg'
import M from '../Pages/bgassets/M.svg'
import T from '../Pages/bgassets/T.svg'
import D from '../Pages/bgassets/D.svg'

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
        <div className="background">
            <img src={P} className="P" alt="P" />
            <img src={H} className="H" alt="H" />
            <img src={M} className="M" alt="M" />
            <img src={T} className="T" alt="T" />
            <img src={D} className="D" alt="D" />
        </div>
        </div>
  );
};

export default Table;
