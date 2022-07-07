import test from 'ava'
import readSecrets from '../src/secrets.js'

test('basic', async t => {
	const file = new URL('helper/file.txt', import.meta.url)
	const data = await readSecrets(file)
	t.is(data, 'foo\n')
})

test('invalid', async t => {
	const file = 'invalid_file'
	const data = await readSecrets(file)
	t.is(data, file)
})
