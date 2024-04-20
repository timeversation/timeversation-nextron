const OFFICIAL_PROFILES = {
    development: {
        NODE_ENV: 'development',
        rest: "http://localhost:3333",
        socket: "http://localhost:3333",
    },
    preview: {
        NODE_ENV: 'preview',
        rest: "https://act4stb1oi.execute-api.us-west-2.amazonaws.com",
        socket: "wss:/k7m5twur93.execute-api.us-west-2.amazonaws.com/staging",
    },
    production: {
        NODE_ENV: 'production',
        rest: "https://73k5bvags4.execute-api.us-west-2.amazonaws.com",
        socket: "wss://oa58a0pqmb.execute-api.us-west-2.amazonaws.com/production",
    }
}

const CURRENT_PROFILE = OFFICIAL_PROFILES[process.env.NODE_ENV]

if (CURRENT_PROFILE.NODE_ENV === 'development') {
    CURRENT_PROFILE.rest = window.location.origin
    CURRENT_PROFILE.socket = "ws://" + window.location.host
}


export { OFFICIAL_PROFILES, CURRENT_PROFILE }