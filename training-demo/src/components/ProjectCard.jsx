import{
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const ProjectCard = (props) => {

  const {imgSrcUrl , cardTitle , description} = props;

  return(
    <Card>
        <CardBody>
            <CardImg
                src={imgSrcUrl}
                top
                height="70%"
                width="50%"
            />
        
            <CardTitle tag="h5">{cardTitle}</CardTitle>
                        
            <CardText>{description}</CardText>
        
            <Button>Button</Button>
        </CardBody>
    </Card>
  )
}

export default ProjectCard
