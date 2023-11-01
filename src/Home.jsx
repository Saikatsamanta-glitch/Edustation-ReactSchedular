import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dayselector from './Model';
// jsx
function Home() {
        const [show, setShow] = useState(false);
        const [date, setDate] = useState(new Date().toDateString());
        const [schduleList, setScheduleList] = useState([])
        console.log(schduleList);
        
        const handleShow = (e) => { setDate(e.toDateString()); setShow(true) };
        return (
                <div className='h-screen w-screen flex justify-evenly items-center bg-cyan-50'>
                        <Calendar onClickDay={handleShow} />
                        <Dayselector show={show} setShow={setShow} date={date} setScheduleList={setScheduleList} schduleList={schduleList} />
                        <ul className="h-5/6 w-96 rounded-lg bg-cyan-500/40 p-3 overflow-y-scroll">
                                {
                                        schduleList.map(v => {
                                                return <li className='w-full bg-cyan-200 text-white rounded'> 
                                                <h1 className='text-md text-center'>{v.title}</h1> <h1 className='text-lg text-center'> Starting @  {v.start} </h1>   
                                                </li>
                
                                        })
                                }
                                
                        </ul>
                </div>
        );
}
export default Home;