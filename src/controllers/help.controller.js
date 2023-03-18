
export const welcomeRoute = (req, res) => {
  res.json({
    welcome: '[*] Welcome to key api',
    message: 'This is an easy API that can create unic keys for use on your projects or as a password'
  })
}
