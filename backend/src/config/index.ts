import ConfigEnvType from './configEnv.type'

const { DEV_APP_PORT } = process.env
const { PRODUCT_APP_PORT } = process.env
const env = process.env.NODE_ENV ?? 'dev'

const dev: ConfigEnvType = {
  app: {
    port: DEV_APP_PORT ?? 3012
  }
}

const product: ConfigEnvType = {
  app: {
    port: PRODUCT_APP_PORT ?? 3012
  }
}
const config = { dev, product }[env] as ConfigEnvType
export default config
