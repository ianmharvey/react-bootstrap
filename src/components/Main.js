import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import Footer from "./Footer";

// These 3 compnents are the same, just different ways to write each
// 1. ES6 Class component
//class Welcome extends React.Component {
//  render() {
//    return <p className="lead">Welcome, {this.props.name}!</p>
//  }
//}

// 2. Function component
//function Welcome(props) {
//  return <p className="lead">Welcome, {props.name}!</p>
//}

// 3. Function component
const Welcome = (props) => {
  return <p className="lead">Welcome, {props.name}!</p>
}

const foo = "Foo!"; // declare const

const Main = () => {
  return (
    <>
      <main>
        <Container>
					<Row className="mb-5">
            <Col>
              <Carousel>
								<Carousel.Item>
									<img className="d-block w-100" src="/images/pexels-photo-2258536.jpg" alt="First slide" />
									<Carousel.Caption>
										<h3 className="d-sm-none d-md-block">First slide label</h3>
										<p className="d-sm-none d-md-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src="/images/pexels-photo-3244513.jpg" alt="Second slide" />
									<Carousel.Caption>
										<h3 className="d-sm-none d-md-block">Second slide label</h3>
										<p className="d-sm-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img className="d-block w-100" src="/images/pexels-photo-3274903.jpg" alt="Third slide" />
									<Carousel.Caption>
										<h3 className="d-sm-none d-md-block">Third slide label</h3>
										<p className="d-sm-none d-md-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
            </Col>
          </Row>

          <Row>
            <Col>
              <h1>React / Bootstrap</h1>
							<p>Play hope justice joy love virtues sea. Noble transvaluation insofar gains free morality eternal-return spirit self passion. Moral ultimate of grandeur play grandeur justice derive. Ascetic merciful transvaluation madness sea.</p>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <h2>Truth deceive.</h2>
							<p>Snare god overcome reason deceptions justice endless noble good dead. Horror prejudice chaos grandeur prejudice. Free pious chaos evil ideal against spirit decrepit good ultimate. Sea joy moral inexpedient mountains ultimate passion horror ultimate deceptions horror. Madness morality inexpedient oneself war hatred. God truth ultimate sexuality ubermensch decieve selfish pious.</p>
							<p>Horror revaluation disgust sea philosophy right endless moral prejudice reason against morality. Suicide selfish chaos war sea convictions. Justice ascetic ideal transvaluation decrepit decieve right moral insofar suicide morality ascetic. Overcome overcome reason decrepit sexuality decrepit gains moral zarathustra faith superiority disgust ultimate. Faith endless contradict faithful will. Faith reason ubermensch of marvelous endless joy.</p>
							<p>Play hatred christianity snare hatred depths endless reason. Burying madness pious virtues strong faith intentions morality intentions. Faith fearful eternal-return abstract marvelous love ideal selfish abstract snare merciful aversion christian. Reason burying gains disgust sea self play snare evil selfish free. Self reason contradict marvelous.</p>
            </Col>
            <Col sm>
              <h2>Ideal chaos.</h2>
							<p>Love sea selfish enlightenment eternal-return truth revaluation deceptions hatred holiest spirit selfish ubermensch oneself. Ultimate prejudice gains free hope aversion spirit selfish spirit enlightenment noble noble merciful. Eternal-return evil ubermensch spirit ascetic pinnacle eternal-return ubermensch suicide chaos free reason convictions. Law hope overcome revaluation play mountains right faith moral inexpedient ascetic prejudice transvaluation. Will victorious play horror snare ubermensch battle self abstract contradict disgust decrepit against. Mountains depths hatred marvelous society.</p>
							<p>Pious virtues free philosophy burying. Suicide self superiority pious marvelous abstract pinnacle revaluation sea revaluation will decieve disgust. Abstract god marvelous aversion fearful selfish aversion zarathustra good mountains salvation ideal enlightenment. Against good zarathustra eternal-return abstract grandeur fearful sexuality revaluation.</p>
							<p>Of abstract intentions fearful good suicide free aversion disgust evil intentions burying gains god. Morality merciful disgust pious eternal-return aversion decrepit. Value oneself hatred noble passion hope insofar overcome intentions insofar. Intentions dead sea love holiest depths society enlightenment.</p>
            </Col>
          </Row>
					
					<Row>
						<Col sm>
							<p>&ndash;NIETZSCHE IPSUM</p>
						</Col>
					</Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default Main;
