import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { mockData } from "../../mockData/index";

const LatestItemSummary = props => {
	const history = useHistory();
	return (
		<Container
			onClick={() => {
				props.toggleDropDown();
				history.push(`/order/${mockData[0].orderId}`);
			}}
			className="globalCursorPointer"
		>
			{mockData[0].items.map(item => (
				<Row key={item.id}>
					<Col md={4} className="p-0">
						<img src={item.image} alt={item.name} width="100" />
					</Col>
					<Col md={8}>
						<p className="font-weight-ligh text-muted mb-0">
							{item.complete ? "Delivered" : "Arriving"}
						</p>
						<p className="font-weight-bolder mb-0">{item.name}</p>
						<Row>
							<Col>
								<p className="mb-0 text-muted globalFontSize12">
									{item.skuAttributes.color}
								</p>
							</Col>
							<Col>
								<p className="mb-0 text-muted globalFontSize12">
									{item.skuAttributes.size}
								</p>
							</Col>
							<Col>
								<p className="mb-0 text-muted globalFontSize12">
									Qty. {item.quantity}
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			))}
		</Container>
	);
};

export default LatestItemSummary;
