import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { SearchContext } from '../context/SearchContext';
import { Link } from 'react-router-dom';
import CardUser from './CardUser';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container, Row, Col } from 'react-bootstrap';

const FetchUser = () => {
  const { search } = useContext(SearchContext)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  
  
  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?page=${currentPage}`);
        if (!response.data || response.data.length === 0) {
          throw new Error('No users found');
        }
        if (isMounted) {
          setUsers(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An error occurred while fetching users');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  const filteredUsers = users.filter((user) => {
    return search.toLowerCase() === "" ? user : user.name.toLowerCase().includes(search);
  });

  const totalPages = Math.ceil(filteredUsers.length / cardsPerPage);

  const displayUsers = filteredUsers.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {displayUsers.map((user) => (
            <Col key={user.id}>
              <Link to={`/users/${user.id}`} style={{ textDecoration: "none" }}>
                <CardUser user={user} />
              </Link>
            </Col>
          ))}
        </Row>
        <div className=" d-flex justify-content-evenly mt-4 mb-5">
              <button onClick={handlePrevious} disabled={currentPage === 1} 
              className="px-2">Previous</button>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <span 
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                >
                </span>
              ))}

              <button onClick={handleNext} disabled={currentPage === totalPages} className="px-4">Next</button>
            </div>
      </Container>
    </>
  );
};

export default FetchUser;

