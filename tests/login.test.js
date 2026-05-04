import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))


export const options = {
    //iterations: 50,
    stages: [

        { duration : '5s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        http_req_failed: ['rate<0.01'], //valida que mais de 1% das requisicoes nao pode falhar
        http_req_duration: ['p(95)<3000', 'max< 5000'],
    }
}

export default function () {
    const url = 'http://localhost:3000/login'
    //postLogin.username = "junior.lima"
    console.log(postLogin)
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = http.post(url, payload, params)
    check(res, {
        'Validar que o satus é 200': (r) => r.status === 200,
        'Validar que o token é string': (r) => typeof (r.json().token) == 'string'
    })
    console.log(res)

    sleep(0.3)
}