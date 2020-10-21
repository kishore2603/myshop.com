import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import OrderState from "../OrderState/index";

const OrderCard = props => {
	return (
		<Card className="my-2">
			<Card.Body>
				{props.items.map(item => (
					<Row key={item.id}>
						{console.log("item:", item)}

						<Col md={4} xs={12} align="center">
							<img src={item.image} alt={item.name} width="200" />
						</Col>
						<Col md={8} xs={12}>
							<div style={{ maxWidth: "400px" }}>
								<OrderState />
							</div>
							<p className="font-weight-ligh text-muted mb-0">
								{item.complete ? "Delivered" : "Arriving"}
							</p>
							<h5 className="font-weight-bolder mb-2">{item.name}</h5>
							<p className="mb-2 text-muted ">{item.skuAttributes.color}</p>

							<p className="mb-2 text-muted ">{item.skuAttributes.size}</p>

							<p className="mb-2 text-muted ">Qty. {item.quantity}</p>
						</Col>
					</Row>
				))}
			</Card.Body>
		</Card>
	);
};

export default OrderCard;
