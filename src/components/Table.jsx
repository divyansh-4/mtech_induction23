import React from 'react';
import './Table.css'
import P from '../bgassets/P.svg'
import H from '../bgassets/H.svg'
import M from '../bgassets/M.svg'
import T from '../bgassets/T.svg'
import D from '../bgassets/D.svg'
import schedulebg from "../components/Assets/schedule.svg"
import day1 from "../components/Assets/day1.svg"
import mainpage from "../components/Assets/mainpage.svg"

const Table = ({ sched }) => {
  return (
    <div className="tableclass">
        <div className="backgroundimg">
            <img src={mainpage} className="mainpage" alt="mainpage" />
            <img src={day1} className="day1" alt="day1" />
        </div>
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
