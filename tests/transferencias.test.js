import http from 'k6/http';
import { sleep, check } from 'k6';
import { getToken } from '../helpers/autenticacao.js'
import { getBaseUrl } from '../utils/variables.js';

export const options = {
  iterations: 1
};

export default function () {
  const token = getToken()
  const url = getBaseUrl() + '/transferencias';
  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }
  console.log(payload)

  const res = http.post(url, payload, params)
  check(res, {
    'Validar que o satus é 201': (r) => r.status === 201,
  })
  sleep(1);
}
