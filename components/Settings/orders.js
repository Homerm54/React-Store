import { Container, Table } from 'react-bootstrap';

export default function Orders() {
  return (
    <>
      <h2>Orders</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Date of Bought</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}