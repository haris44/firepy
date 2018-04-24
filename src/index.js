import { gpio } from './mock/gpio'
import env from 'common-env'

var config = env().getOrElseAll({
    node: {
        env: 'development'
    }
})

console.log(gpio(config.node.env))
