const BASE_URL = 'https://docs.sanity.io/help/'

module.exports = function generateHelpUrl(slug) {
  return BASE_URL + slug
}
