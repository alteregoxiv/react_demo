import "../Blogs.css"

import{
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap"

const BlogCard = (props) => {
  const {id , title , body} = props;;

  return(
    <Card className="newcard">
      <CardBody>
				<CardTitle tag="h2">
					{id}. {title}
				</CardTitle>
				<CardText tag="h3">{body}</CardText>
			</CardBody>
    </Card>
  )
}

export default BlogCard
