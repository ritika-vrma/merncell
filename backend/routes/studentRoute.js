const express = require('express');
const { registerStudent, loginStudent, logout, forgotPassword, resetPassword, updatePassword, updateProfile, getStudentMEDetails, getAllStudent, getStudentDetails, updateRoles, deleteStudent } = require('../controllers/studentController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.route('/register').post(registerStudent);

router.route('/login').post(loginStudent);

router.route('/logout').get(isAuthenticatedUser, logout);

router.route('/password/forgot').post(forgotPassword);

router.route('/password/reset/:token').put(resetPassword);

router.route('/me').get(isAuthenticatedUser, getStudentMEDetails);

router.route('/password/update').put(isAuthenticatedUser, updatePassword);

router.route('/me/update').put(isAuthenticatedUser, updateProfile);

router.route('/admin/students').get(isAuthenticatedUser, authorizeRoles('admin'), getAllStudent);

router.route('/admin/student/:id')
.get(isAuthenticatedUser, authorizeRoles('admin'), getStudentDetails)
.put(isAuthenticatedUser, authorizeRoles('admin'),updateRoles )
.delete(isAuthenticatedUser, authorizeRoles('admin'),deleteStudent );

module.exports = router;