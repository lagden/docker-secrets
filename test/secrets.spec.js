import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {test} from 'node:test'
import assert from 'node:assert'
import readSecrets from '../src/secrets.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

test('basic', async () => {
	const file = path.join(__dirname, 'helper', 'file.txt')
	const data = await readSecrets(file)
	assert.equal(data, 'foo\n')
})

test('url', async () => {
	const file = new URL('helper/file.txt', import.meta.url)
	const data = await readSecrets(file)
	assert.equal(data, 'foo\n')
})

test('url invalid', async () => {
	const file = new URL('invalid_file', import.meta.url)
	const data = await readSecrets(file)
	assert.equal(data, file)
})

test('invalid', async () => {
	const file = 'invalid_file'
	const data = await readSecrets(file)
	assert.equal(data, file)
})
