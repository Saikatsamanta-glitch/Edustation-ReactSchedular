import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
export default function Dayselector({ show, setShow, date, setScheduleList, schduleList }) {
        const handleClose = () => setShow(false);
        const [scheduleDetail,setScheduleDetail] = useState({
                title:"",
                description:"",
                start:"",
                end:""
        })
       const handleAddevent = ()=>{
        setScheduleList([...schduleList, scheduleDetail])
       }
        return (
                <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} >
                        <Modal.Header closeButton>
                                <Modal.Title> Lets schedule our meeting 🚀 for {date} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                                        <Form.Control
                                                onChange={(e)=>{setScheduleDetail({...scheduleDetail, title:e.target.value })}}
                                                aria-label="Small"
                                                aria-describedby="inputGroup-sizing-sm"
                                        />

                                        <InputGroup>
                                                <InputGroup.Text>Prerequists</InputGroup.Text>
                                                <Form.Control onChange={(e)=>{setScheduleDetail({...scheduleDetail, description:e.target.value })}} as="textarea" aria-label="With textarea"  />
                                        </InputGroup>
                                        <h4>Start <input type="time" onChange={(e)=>{setScheduleDetail({...scheduleDetail, start:e.target.value })}}  /></h4> 
                                        <h4>End <input type="time" onChange={(e)=>{setScheduleDetail({...scheduleDetail, end:e.target.value })}} /></h4> 
                                </InputGroup>
                        </Modal.Body>
                        <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                        Close
                                </Button>
                                <Button variant="primary" onClick={()=> { handleClose(); handleAddevent(); }}>
                                        Create Events
                                </Button>
                        </Modal.Footer>
                </Modal>
        )
}
