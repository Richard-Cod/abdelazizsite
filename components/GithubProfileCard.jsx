
import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const BIO = "Je suis un développeur Web Full Stack | Développeur d'applications Android | Contributeur Open Source"
const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={"/img/icons/common/profileAbdel.jpeg"}
								style={{ width: "200px" }}
								alt=""
								className="rounded-lg img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Me contacter!</h2>
							<p className="lead text-white mt-3">
								Discuter avec moi des projets que vous souhaitez réaliser
							</p>
							<p className="text-white mt-3"> {BIO} </p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								 Suresnes , France
							</div>
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
