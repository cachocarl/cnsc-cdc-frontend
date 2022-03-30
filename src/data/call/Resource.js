import CrudInterface from "./CrudInterface";

const endpoint = {
  OFFICE: "/office",
  REQUEST_NATURE: "/request_nature",
  INFO_TYPE: "/info_type",
  DICR_INITIATION: "/dicr-initiation",
  USER: "/user",
  USER_INFO: "/user_info",
};

//Office/college/department + Users
export const OfficeAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.OFFICE),
  retrieve: CrudInterface.retrieveFn(endpoint.OFFICE),
  create: CrudInterface.createFn(endpoint.OFFICE),
  update: CrudInterface.updateFn(endpoint.OFFICE),
  delete: CrudInterface.removeFn(endpoint.OFFICE),
};

export const UserAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.USER),
  retrieve: CrudInterface.retrieveFn(endpoint.USER),
  create: CrudInterface.createFn(endpoint.USER),
  update: CrudInterface.updateFn(endpoint.USER),
  delete: CrudInterface.removeFn(endpoint.USER),
};

export const UserInfoAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.USER_INFO),
  retrieve: CrudInterface.retrieveFn(endpoint.USER_INFO),
  create: CrudInterface.createFn(endpoint.USER_INFO),
  update: CrudInterface.updateFn(endpoint.USER_INFO),
  delete: CrudInterface.removeFn(endpoint.USER_INFO),
};

//DICR Process
export const RequestNatureAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.REQUEST_NATURE),
  retrieve: CrudInterface.retrieveFn(endpoint.REQUEST_NATURE),
  create: CrudInterface.createFn(endpoint.REQUEST_NATURE),
  update: CrudInterface.updateFn(endpoint.REQUEST_NATURE),
  delete: CrudInterface.removeFn(endpoint.REQUEST_NATURE),
};
export const InfoTypeAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.INFO_TYPE),
  retrieve: CrudInterface.retrieveFn(endpoint.INFO_TYPE),
  create: CrudInterface.createFn(endpoint.INFO_TYPE),
  update: CrudInterface.updateFn(endpoint.INFO_TYPE),
  delete: CrudInterface.removeFn(endpoint.INFO_TYPE),
};

export const DicrInitiationAPI = {
  retrieveList: CrudInterface.retrieveListFn(endpoint.DICR_INITIATION),
  retrieve: CrudInterface.retrieveFn(endpoint.DICR_INITIATION),
  create: CrudInterface.createFn(endpoint.DICR_INITIATION),
  update: CrudInterface.updateFn(endpoint.DICR_INITIATION),
  delete: CrudInterface.removeFn(endpoint.DICR_INITIATION),
};

const Resource = {
  OfficeAPI,
  UserInfoAPI,
  UserAPI,
  RequestNatureAPI,
  DicrInitiationAPI,
  InfoTypeAPI
};

export default Resource;
