import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from 'react-bootstrap';
const UserDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
               setData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return(  
           <Box sx={{ display: 'flex' }}>
               <CircularProgress />
           </Box>);
      }

    if (error) return <div>Error: {error}</div>;

    return (
<div>
<div className="py-4 px-4">
   <div className="col-md-6 col-sm-10 col-sm-auto mx-auto">
      <div className="bg-white shadow rounded overflow-hidden">
         <div className="px-4 pt-0 pb-4 cover">
            <div className="d-flex  justify-content-around profile-head">
               <div className="profile mr-3">
                  <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail" />
               </div>
               <div className="media-body mb-5 text-white">
                  <h4 className="mt-0 mb-0">{data.name}</h4>
                  <p className="small mb-4"><span style={{color : "gray" }}> company : </span>
                  {data.company?.name}
                  </p>
               </div>
            </div>
         </div>
         <div className="address-container mt-5">
      <h3 className="address-title">Contact Information</h3>
      <div className="address-grid">
        <div className="address-item">
          <h4>Address:</h4>
          <div className="address-details">
            <p><strong>Street:</strong> {data.address?.street || '-'}</p>
            <p><strong>Suite:</strong> {data.address?.suite || '-'}</p>
            <p><strong>City:</strong> {data.address?.city || '-'}</p>
            <p><strong>Zipcode:</strong> {data.address?.zipcode || '-'}</p>
          </div>
        </div>
        <div className="address-item">
          <h4>Contact:</h4>
          <ul>
            <li><strong>Email:</strong> {data.email || '-'}</li>
            <li><strong>Website:</strong> {data.website || '-'}</li>
            <li><strong>Phone:</strong> {data.phone || '-'}</li>
          </ul>
        </div>
      </div>
    </div>
      </div>
   </div>
</div>   
   <Container className='d-flex justify-content-start mb-5'>
        <Link to="/users">
           <Button variant="contained">Back</Button>
           </Link>  
   </Container>

</div>
    );
};

export default UserDetails;
