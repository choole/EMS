import axios from "axios";

const REST_API = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API)

export const createEmployee = (employee) => axios.post(REST_API, employee);

export const getEmployee = (employeeId) => axios.get(REST_API + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put( REST_API + '/' + employeeId, employee );

export const deleteEmployee = (employeeId) => axios.delete(REST_API+ '/' + employeeId);