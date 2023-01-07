import items from "../data/items.json";
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import Footer from "../components/Footer";

export  function Store() {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-3 mt-3">
        {items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>

      <Footer />
    </div>
  )
}
