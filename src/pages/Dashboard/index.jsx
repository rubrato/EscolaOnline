import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Dashboard = () => {
    return (
        <Container>
            <Link to="/classroom">
                Aula
            </Link>
        </Container>
    )
}

export default Dashboard;