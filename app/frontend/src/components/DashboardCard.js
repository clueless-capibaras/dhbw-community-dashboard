import { useNavigate } from 'react-router';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function DashboardCard(props) {
    let style = { width: 'auto', cursor: 'pointer', padding: '0' };
    if(props.disabled) {
        style = { width: 'auto', cursor: 'not-allowed', padding: '0', opacity: '0.5' };
    }
    const navigate = useNavigate();
    const cyClass = (props.cyClass !== undefined) ? " "+props.cyClass : "";
    return (
        <Col /*xs={2} s={2} md={2} lg={4}*/ xl={props.colWidth}>
            <Card /*bg='light'*/ border='0' className={'m-2 mt-3' + cyClass} style={style} onClick={()=> (!props.disabled)?((props.external)?window.open(props.path, props.title):navigate(props.path)):null}>
                <Card.Img style={{width: '10rem', margin: 'auto'}} variant="bottom" src={props.icon} />
                <Card.Body>
                    <Card.Title align='center' style={{fontSize: '1rem', height: '.2rem'}}>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default DashboardCard;