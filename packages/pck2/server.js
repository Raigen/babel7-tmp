import Bluebird from 'bluebird'

export async function start() {
    await Bluebird.delay(200)
    console.log('done')
}
