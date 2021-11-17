import axios, { AxiosRequestConfig } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';


let useMock = true;

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();



export const axiosMockAdapterInstance= new AxiosMockAdapter(axiosMockInstance);
export default useMock? axiosMockInstance : axiosLiveInstance;