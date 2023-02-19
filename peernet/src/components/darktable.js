import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import '../App.css'
const DarkTable = ({ data }) => {
  const [clients, setClients] = useState(data);

  const handleDelete = (id) => {
    const filteredClients = clients.filter((client) => client.id !== id);
    setClients(filteredClients);
  };

  const handleUpdate = (id) => {
    // your update logic here
  };

  return (
    <Table striped bordered variant="dark">
      <thead>
        <tr>
          <th>Client ID</th>
          <th>Provider ID</th>
          <th>Flow Rate</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{`${client.clientId.slice(0, 8)}..`}</td>
            <td>{`${client.providerId.slice(0,8)}...`}</td>
            <td>{client.flowRate}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => handleDelete(client.id)}
              >
                Delete
              </Button>
              <Button
                variant="primary"
                onClick={() => handleUpdate(client.id)}
              >
                Update
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DarkTable;
