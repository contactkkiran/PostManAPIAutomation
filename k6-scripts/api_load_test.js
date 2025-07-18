import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10, // virtual users
  duration: "30s", // total duration
};

export default function () {
  const res = http.get("https://restful-booker.herokuapp.com");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
  });
  sleep(1);
}
