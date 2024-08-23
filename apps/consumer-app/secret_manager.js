var AWS = require('aws-sdk'),
	region = 'us-east-1',
	secretName = process.env.SECRET_NAME
var fs = require('fs')
var SecretsManager = require('aws-sdk/clients/secretsmanager')
const secretsManager = new SecretsManager({
	region,
})

async function getSecret(secretName) {
	try {
		const secretData = await secretsManager.getSecretValue({ SecretId: secretName }).promise()

		if (!secretData.SecretString) throw new Error('No data in secret.')

		const environmentVars = JSON.parse(secretData.SecretString)
		const envFileContent = Object.keys(environmentVars).reduce(
			(outputString, key) => (outputString += `${key}=${environmentVars[key]}\n`),
			'',
		)
		const varFileContent = Object.keys(environmentVars).reduce(
			(outputString, key) => (outputString += `export ${key}="${environmentVars[key]}"\n`),
			'',
		)

		fs.writeFileSync('.env', envFileContent)
		console.log('The .env file has been written successfully!')
	} catch (error) {
		console.error(error, error.stack)
		process.exit(1)
	}
}
const start = async function (stName) {
	await getSecret(stName)
}

start(secretName)
