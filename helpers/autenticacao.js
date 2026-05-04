import http from 'k6/http';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { getBaseUrl } from '../utils/variables.js';

export function getToken() {
    const url = getBaseUrl() + '/login'
    //postLogin.username = "junior.lima"
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = http.post(url, payload, params)
    return res.json('token')
}