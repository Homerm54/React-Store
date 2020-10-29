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
            <th>Order Date</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark ppppppppppppppppp</td>
            <td>Otto</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}