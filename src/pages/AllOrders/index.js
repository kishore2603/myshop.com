import React from "react";
import { mockData } from "../../mockData/index";
import OrderCard from "../../components/OrderCard/index";
import { Container } from "react-bootstrap";

const AllOrders = () => {
	return (
		<div>
			<h1 align="center" className="my-5 text-lead">
				All Orders
			</h1>
			{mockData.map(order => (
				<Container key={order.id} style={{ maxWidth: "900px" }}>
					<OrderCard {...order} />
				</Container>
			))}
		</div>
	);
};

export default AllOrders;
