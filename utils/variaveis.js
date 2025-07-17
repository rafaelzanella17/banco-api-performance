const configLocal = JSON.parse(open('../config/config.local.json'))


export function pegarBaseURL() {
  const baseURL = __ENV.MY_HOSTNAME || configLocal.baseUrl

  return baseURL
}
