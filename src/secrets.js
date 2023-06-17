import {pathToFileURL} from 'node:url'
import {open} from 'node:fs/promises'

/**
 * Reads the content of a secrets file.
 * @param {string|URL} value - Path or URL of the secrets file.
 * @returns {Promise<string>} - A Promise that resolves to the content of the secrets file as a string, or the original value if an error occurs.
 */
async function readSecrets(value) {
	const file = value instanceof URL ? value : pathToFileURL(value)
	let filehandle

	try {
		filehandle = await open(file, 'r')
		const content = await filehandle.readFile('utf8')
		await filehandle?.close()
		return content
	} catch {
		return value
	}
}

export default readSecrets
