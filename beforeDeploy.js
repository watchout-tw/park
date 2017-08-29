const files = [
  './docs/index.html',
  './docs/kangsim/index.html',
  './docs/kangsim/ask-taoyuan/index.html'
]
const replace = require('replace-in-file')
const options = {
  files,
  from: [
    /<html(.*)class="[^"]*">/,
    /<script(.*)src="[^"]*google-analytics\.com\/analytics.js"><\/script>/,
    /<script(.*)src="[^"]*googletagmanager.com\/gtm\.js[^"]*"><\/script>/
  ],
  to: [
    '<html$1>',
    '',
    ''
  ]
}
console.log('beforeDeploy...')
replace(options)
  .then(changedFiles => {
    console.log('Modified files:\n')
    console.log(changedFiles.join('\n'))
  })
  .catch(error => {
    console.error('Error occurred:', error)
  })
