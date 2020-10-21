import React, { useRef, useState } from "react";
import { Navbar, Nav, Overlay, Popover } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// CSS
import "./style.css";

// Icons
import { BiChevronDown } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";

// Components
import LatestItemSummary from "../LatestItemSummary";
import { Link } from "react-router-dom";
import { mockData } from "../../mockData/index";

const Navigation = () => {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = event => {
		setShow(!show);
		setTarget(event.target);
	};

	const history = useHistory();

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Brand Logo</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>Products</Nav.Link>
					<Nav.Link>Brands</Nav.Link>
					<Nav.Link>Deals</Nav.Link>
					<Nav.Link>Services</Nav.Link>
				</Nav>
				<Nav ref={ref}>
					<Nav.Link>
						<RiAccountCircleLine size="25" />
						Account
						<BiChevronDown />
					</Nav.Link>
					<Nav.Link>
						Recently Viewed
						<BiChevronDown />
					</Nav.Link>
					<Nav.Link className="nav--link">
						{window.screen.width < 768 ? (
							<span
								onClick={() => {
									history.push(`/order/${mockData[0].orderId}`);
								}}
							>
								Order Status
							</span>
						) : (
							<>
								<span onClick={handleClick}>
									Order Status
									<BiChevronDown />
								</span>
								<Overlay
									show={show}
									target={target}
									placement="bottom"
									container={ref.current}
									containerPadding={20}
								>
									<Popover id="popover-contained">
										<Popover.Title as="h5">
											<div style={{ display: "flex", flex: 1 }}>
												<div className="mr-auto">Latest order</div>
												<div>
													<GrFormClose
														onClick={() => setShow(!show)}
														className="globalCursorPointer"
													/>
												</div>
											</div>
										</Popover.Title>
										<Popover.Content>
											<LatestItemSummary
												toggleDropDown={() => setShow(!show)}
											/>
										</Popover.Content>
										<Popover.Title align="right">
											<Link to="/all-orders" onClick={() => setShow(!show)}>
												<p className="globalFontSize10 globalCursorPointer mb-0">
													view all <AiOutlineArrowRight />
												</p>
											</Link>
										</Popover.Title>
									</Popover>
								</Overlay>
							</>
						)}
					</Nav.Link>
					<Nav.Link>
						Saved Items
						<BiChevronDown />
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
