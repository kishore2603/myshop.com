import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import OrderCard from "../components/OrderCard";
import { mockData } from "../mockData/index";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Order = () => {
	let { orderId } = useParams();

	const data = mockData.find(order => order.orderId === parseInt(orderId));
	console.log("data:", data);

	return (
		<Container style={{ maxWidth: "900px" }} className="my-4">
			<OrderCard {...data} />
			<div align="right">
				<Link to="/all-orders">
					<p className="globalFontSize10 globalCursorPointer mb-0">
						view all orders <AiOutlineArrowRight />
					</p>
				</Link>
			</div>
		</Container>
	);
};

export default Order;
