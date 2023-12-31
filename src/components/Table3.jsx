import React from 'react';
import './Table.css'
import P from '../bgassets/P.svg'
import H from '../bgassets/H.svg'
import M from '../bgassets/M.svg'
import T from '../bgassets/T.svg'
import D from '../bgassets/D.svg'
import schedulebg from "../components/Assets/schedule.svg"
import day1 from "../components/Assets/day3.svg"
import mainpage from "../components/Assets/mainpage.svg"
import { useEffect,useState } from 'react';

const API = "https://sheet.best/api/sheets/14880743-6abd-4197-b9cf-ec5816e1f392";

const Table3 = () => {
  const [sched, setSched] = useState([]);

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
    <div className="tableclass mongoose-med">
        <div className="backgroundimg">
            <img src={day1} className={"day1"} alt="day1" />
        </div>
      <table className="tableclass">
      <tbody>
        {sched.map((day, index) => {
          const { time, event } = day;
          return (
            <tr className="schedule table " key={index}>
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

export default Table3;
