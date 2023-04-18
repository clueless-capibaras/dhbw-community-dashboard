import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import CanteenSettings from './CanteenSettings';

function Settings() {
    return(
        <>
        <Tab.Container defaultActiveKey="">
            <Row>
                <Col md="3">
                
                <h1>Einstellungen</h1>

                <Nav variant="pills" className="flex-column">
                    <Nav.Link eventKey="account">Account</Nav.Link>
                    <Nav.Link eventKey="calendar">Kalender</Nav.Link>
                    <Nav.Link eventKey="canteen">Mensa</Nav.Link>
                    <Nav.Link eventKey="general">Allgemein</Nav.Link>
                    <Nav.Link eventKey="about">Über</Nav.Link>
                </Nav>
                
                </Col>

                <Col md="9">
                
                <Tab.Content>
                    <Tab.Pane eventKey="account">

                    </Tab.Pane>
                    <Tab.Pane eventKey="calendar">

                    </Tab.Pane>
                    <Tab.Pane eventKey="canteen">
                        <CanteenSettings />
                    </Tab.Pane>
                    <Tab.Pane eventKey="general">

                    </Tab.Pane>
                    <Tab.Pane eventKey="about">

                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    );
}

export default Settings;