import * as core from '@actions/core'
import {readFile} from 'node:fs/promises'

async function run(): Promise<void> {
  try {
    const filePath = core.getInput('path')
    const encoding = core.getInput('encoding')
    const contents = await readFile(filePath, {
      encoding: encoding as BufferEncoding
    })
    core.info(`File contents:\n${contents}`)
    core.setOutput('contents', contents)
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : String(error))
  }
}

run()
