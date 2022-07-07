import {open} from 'node:fs/promises'

/**
 * Helper to read the docker secrets.
 *
 * @async
 * @function readSecrets
 * @param {string|URL} file - The file path.
 * @return {Promise<string>} If success return the file content else the passed argument (file).
 */
async function readSecrets(file) {
	let filehandle

	try {
		filehandle = await open(file, 'r+')
		return await filehandle.readFile('utf8')
	} catch (error) {
		console.error(error)
	} finally {
		if (filehandle) {
			await filehandle?.close()
		}
	}

	return file
}

export default readSecrets
