export const OFFICIAL_PROFILES = {
    development: {
        NODE_ENV: 'development',
        rest: "http://localhost:3333",
        socket: "http://localhost:3333",
    },
    preview: {
        NODE_ENV: 'preview',
        rest: "https://8rx21x1hfb.execute-api.us-west-2.amazonaws.com",
        socket: "wss://b5rbwf4vui.execute-api.us-west-2.amazonaws.com/staging",
    },
    production: {
        NODE_ENV: 'production',
        rest: "https://gddxtip4tk.execute-api.us-west-2.amazonaws.com",
        socket: "wss://i9c0ksiy26.execute-api.us-west-2.amazonaws.com/production",
    }
}

export const getProfile = () => {
    const CURRENT_OFFICIAL_PROFILE = OFFICIAL_PROFILES[process.env.NODE_ENV]
    return CURRENT_OFFICIAL_PROFILE
}