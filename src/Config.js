
const API = "lgYaNYkDhstn38zwvRWpAQ7IPe_6roSS6RXGbL0p_VN";

const URL = (event) => {
  return "https://maker.ifttt.com/trigger/" + event + "/with/key/" + API;
}

export { URL }