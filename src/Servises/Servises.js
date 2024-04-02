import http from "../common/http-common"
const getdata =()=>{
    return http.get("/Content")
}
const Servises ={
    getdata
}
export default Servises