import path from 'node:path'
import {fileURLToPath} from 'node:url'
import test from 'ava'
import readSecrets from '../src/secrets.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

test('basic', async t => {
	const file = path.join(__dirname, 'helper', 'file.txt')
	const data = await readSecrets(file)
	t.is(data, 'foo\n')
})

test('url', async t => {
	const file = new URL('helper/file.txt', import.meta.url)
	const data = await readSecrets(file)
	t.is(data, 'foo\n')
})

test('url invalid', async t => {
	const file = new URL('invalid_file', import.meta.url)
	const data = await readSecrets(file)
	t.is(data, file)
})

test('invalid', async t => {
	const file = 'invalid_file'
	const data = await readSecrets(file)
	t.is(data, file)
})
