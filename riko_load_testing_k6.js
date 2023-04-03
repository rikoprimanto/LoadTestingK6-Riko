import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10, // 1 user looping for 1 minute
  duration: '30s',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
}

export default function () {
  http.get('https://dto.kemkes.go.id/');
  sleep(1);
}
