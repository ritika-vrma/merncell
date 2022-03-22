// import React, { Fragment, useEffect } from 'react';
// import LoginComponent from './LoginComponent';
// import SignUpComponent from './SignUpComponent';
// import { useParams } from "react-router-dom";
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { changeLoginSignUp } from '../../../actions/jobAction';

// const LoginSignUp = () => {

//     // const dispatch = useDispatch();
//     // const { component } = useSelector((state) => state.changeLoginSignUpReducer);

//     // useEffect(() => {
//     //     dispatch(changeLoginSignUp("login"));
//     // }, [dispatch]);

//     const [btn,setBtn] = useState("logi");
//     return (
//         <Fragment>
//             {btn === "login" ? <LoginComponent setBtn={setBtn} /> : <SignUpComponent />}
//         </Fragment>
//     );
// };

// export default LoginSignUp;