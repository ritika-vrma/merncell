import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from '../User/ProfileComponent/ProfileComponent';

const ProtectedRoute = ({ isAuthenticated, loading, student }) => {

    const navigate = useNavigate();
    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login", { replace: true });
        }
    }, [navigate, isAuthenticated]);

    return (
        <Fragment>
            {!loading && (
                <ProfileComponent isAuthenticated={isAuthenticated} loading={loading} student={student} />
            )}
        </Fragment>
    );
};

export default ProtectedRoute;