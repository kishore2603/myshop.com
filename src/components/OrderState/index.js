import { Col, Row } from "react-bootstrap";
import React from "react";

// Icons
import { FaWarehouse, FaShippingFast } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const OrderState = () => {
	return (
		<Row className="py-4">
			<Col>
				<div
					className="text-center text-muted pb-4"
					style={{ borderBottom: "3px solid darkgray" }}
				>
					<FaWarehouse size="30" />
				</div>
			</Col>
			<Col>
				<div
					className="text-center text-muted pb-4"
					style={{ borderBottom: "3px solid darkgray" }}
				>
					<FaShippingFast size="30" />
				</div>
			</Col>
			<Col>
				<div
					className="text-center text-muted pb-4"
					style={{ borderBottom: "3px solid darkgray" }}
				>
					<AiOutlineHome size="30" />
				</div>
			</Col>
		</Row>
	);
};

export default OrderState;
