import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../banner.png';

const NewsList = ({title, description, src, url}) => {
  return (
    <Card className='card mb-3 d-inline-block mx-3 my-3 px-3 py-3' style={{ maxWidth: '345px' }}>
      <Card.Img style={{height:'200px', width:'300px'}} variant="top" src={src? src : myImage} />
      <Card.Body>
        <Card.Title>{title.slice(0,50)}</Card.Title>
        <Card.Text>{description? description.slice(0,100) : 
        'A diplomatic scramble unfolded Saturday after President Donald Trump announced he would meet his'}
        </Card.Text>
        <Button variant="primary" href={url}>Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsList
