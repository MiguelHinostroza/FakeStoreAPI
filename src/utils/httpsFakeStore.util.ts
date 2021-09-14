//importamos Axios
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

// se crea una constante de tipo axios con el metodo create del cual recibe un objeto como paramentro con la URL base
const HttpsFakeStore = axios.create(
    {
        baseURL: 'https://fakestoreapi.com/'
    }
)
// constante request de tipo Axios RequesConfig para el manejo de request
const requestInterceptor = (request: AxiosRequestConfig): AxiosRequestConfig => {
    request.url = `${request.url}`
    return request;
}
// constante response de tipo AxiosResponse para el manejo de responses
const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
    let responseProcessed = response.data.data ?? response.data ?? response;
    return responseProcessed;
}
// constante error de tipo Axios Error para el manejo de errores
const errorInterceptor = (error:AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

HttpsFakeStore.interceptors.request.use(requestInterceptor);
HttpsFakeStore.interceptors.response.use(responseInterceptor, errorInterceptor);

export default HttpsFakeStore;