import CrudInterface from "./CrudInterface";

const endpoint = {
  OFFICE: "/office",
  USER_INFO: "/user_info",
};

const OfficeAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.OFFICE),
  retrieve: CrudInterface.retrieveFn(endpoint.OFFICE),
  create: CrudInterface.createFn(endpoint.OFFICE),
  update: CrudInterface.updateFn(endpoint.OFFICE),
  delete: CrudInterface.removeFn(endpoint.OFFICE),
};

const User_InfoAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.OFFICE),
  retrieve: CrudInterface.retrieveFn(endpoint.OFFICE),
  create: CrudInterface.createFn(endpoint.OFFICE),
  update: CrudInterface.updateFn(endpoint.OFFICE),
  delete: CrudInterface.removeFn(endpoint.OFFICE),
};

const Resource = {
  OfficeAPI,
  User_InfoAPI,
};

export default Resource;
