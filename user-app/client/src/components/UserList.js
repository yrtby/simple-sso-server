import { useState, useEffect } from 'react';
import User from './User';
import AddForm from './AddForm';
import { Col, Table, Button, Modal } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import axios from 'axios';

const UserList = ({token}) => {

    const [users, setUsers] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        (async function(){
            await axios.get('http://localhost:3200/users/',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }
            }).then((response) => {
                setUsers(response.data.data);
            }).catch((error) => {
                console.log(error);
            })
        })()
    },[show]);

    return(
        <>
        <Col className="tableHead" xl={12} md={12} lg={12} sm={12} xs={12}>
            <h4>Manage Users</h4>
            <Button variant="success" onClick={handleShow} ><BsFillPlusCircleFill/> Add New User</Button>
        </Col>
        <Col className="tableBody" xl={12} md={12} lg={12} sm={12} xs={12}>
        <Table striped hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
                {users &&
					users.map((user) => (
						<tr key={user.id}>
							<User user={user} />
						</tr>
					))
				}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {token && <AddForm token={token} setShow={setShow}/>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">
					Close
				</Button>
            </Modal.Footer>
        </Modal>

        </Col>
        </>       
    )
}

export default UserList;