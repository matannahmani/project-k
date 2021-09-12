const homeIP = "http://192.168.0.8:3000"
const officeIP = 'https://8ac0-123-254-158-80.ngrok.io'
const liveIP = "https://api.mykstar.net"

import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = `http://${liveIP}`;
axios.defaults.headers.common['Access-Control-Allow-Methods'] = "DELETE, POST, GET, PATCH";
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

const apiRequest = async ({method,path,headers={},body={},fd,serial=true}) =>
    axios({
        method: method,
        url: `${liveIP}/${path}`,
        headers: {...headers},
        data: fd ? fd : {page: 0.,...body} 
    }).then(res =>
        { 
            return res
        }).catch(er => 
            {
                console.log(er)
            return er
        });


export {apiRequest,liveIP,officeIP}