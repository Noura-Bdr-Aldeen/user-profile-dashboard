import { Container } from 'react-bootstrap'
import FetchUser from '../components/FetchUser'
import SerachComponent from '../components/Serach'




const UserList = () => {
  return (
       <>
       <Container >
       <SerachComponent />
       <FetchUser/>
       </Container>
       </>
  )
}

export default UserList
