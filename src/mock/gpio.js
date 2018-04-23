export const gpio = (nodeEnv) => {
    if (nodeEnv === "production") {
        return require('onoff').Gpio
    } else {
        return () => { return "coucou" }
    }
}