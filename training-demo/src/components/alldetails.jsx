import{
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from "reactstrap"

const Alldetails = (props) => {
  const { user } = props;
  
  return(
    <Card>
      <CardBody>            
        <CardTitle tag="h2">Name: {user.name}</CardTitle>

        <CardText tag="h4">Username: {user.username}</CardText>
        <CardText tag="h4">Email: {user.email}</CardText>
        <CardText tag="h4">Phone: {user.phone}</CardText>
        <CardText tag="h4">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</CardText>
        <CardText tag="h4">Company: {user.company.name}</CardText>
      </CardBody>
    </Card>
  )
}

export default Alldetails
