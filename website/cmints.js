'use strict'

const {init} = require('cmints')
const {runServer, generateStatic} = require('cmints/lib/server')
const {deploy} = require('cmints/lib/deploy')
const argv = require('minimist')(process.argv.slice(2))
const {copyFileSync} = require('fs')

copyFileSync('list.json', 'website/public/list.json')

init(() => {
	if (argv.static) {
		generateStatic(() => {
			if (argv.deploy) {
				deploy()
			}
			else {
				process.exit()
			}
		})
	}
	else if (argv.server) {
		runServer(argv)
	}
	else {
		console.log(`
      To launch server: npm run test-launch-server
      To launch static: npm run test-generate-site
    `)
	}
})
