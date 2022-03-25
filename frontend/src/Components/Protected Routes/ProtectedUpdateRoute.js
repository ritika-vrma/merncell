import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateProfileComponent from '../User/ProfileComponent/UpdateProfileComponent';

const ProtectedUpdateRoute = ({ isAuthenticated, loading, student }) => {
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login", { replace: true });
        }
    }, [navigate, isAuthenticated]);

    return (
        <Fragment>
            <UpdateProfileComponent />
        </Fragment>
    );
};

export default ProtectedUpdateRoute;