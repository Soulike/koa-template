import signale from 'signale';

export const SERVER = Object.freeze({
    PORT: 4005,

    INFO_LOGGER: signale.info,
    WARN_LOGGER: signale.warn,
    ERROR_LOGGER: signale.error,
});
