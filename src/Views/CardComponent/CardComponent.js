import React from "react"
import {Card,Button} from "react-bootstrap"
import styles from "./CardComponent.module.css"

import MaterialCardComponent from  "./MaterialCard/MaterialCardComponent"
const CardComponent=()=>{


return (<div className={styles.JobCard}>
{/* <Card className="text-center" >
<Card.Header>Featured</Card.Header>
<Card.Body>
  <Card.Title >Special title treatment</Card.Title>
  <Card.Text>
    With supporting text below as a natural lead-in to additional content.
  </Card.Text>
  <Button variant="info">Send Quote</Button>
</Card.Body>
<Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card> */}
<MaterialCardComponent/>
</div>
)




}

export default CardComponent

