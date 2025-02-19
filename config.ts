import { Astal } from "astal/gtk3";

// Modules
export const bar = {
    vertical: true,
    modules: {
        osIcon: {
            enabled: true,
        },
        activeWindow: {
            enabled: true,
        },
        mediaPlaying: {
            enabled: true,
        },
        workspaces: {
            enabled: true,
            shown: 5,
        },
        tray: {
            enabled: true,
        },
        statusIcons: {
            enabled: true,
        },
        pkgUpdates: {
            enabled: true,
        },
        notifCount: {
            enabled: true,
        },
        battery: {
            enabled: true,
        },
        dateTime: {
            enabled: true,
            format: "%d/%m/%y %R",
            detailedFormat: "%c",
        },
        power: {
            enabled: true,
        },
    },
};

export const launcher = {
    maxResults: 15, // Max shown results at one time (i.e. max height of the launcher)
    apps: {
        maxResults: 30, // Actual max results, -1 for infinite
        pins: [
            ["firefox", "waterfox", "google-chrome", "chromium", "brave-browser", "vivaldi-stable", "vivaldi-snapshot"],
            ["foot", "alacritty", "kitty", "wezterm"],
            ["thunar", "nemo", "nautilus"],
            ["codium", "code", "clion", "intellij-idea-ultimate-edition"],
            ["spotify-adblock", "spotify", "audacious", "elisa"],
        ],
    },
    files: {
        maxResults: 40, // Actual max results, -1 for infinite
        fdOpts: ["-a", "-t", "f"], // Options to pass to `fd`
    },
    math: {
        maxResults: 40, // Actual max results, -1 for infinite
    },
    windows: {
        maxResults: -1, // Actual max results, -1 for infinite
        weights: {
            // Weights for fuzzy sort
            title: 1,
            class: 1,
            initialTitle: 0.5,
            initialClass: 0.5,
        },
    },
    todo: {
        notify: true,
    },
};

export const notifpopups = {
    maxPopups: -1,
    expire: false,
    agoTime: true, // Whether to show time in ago format, e.g. 10 mins ago, or raw time, e.g. 10:42
};

export const osds = {
    volume: {
        position: Astal.WindowAnchor.RIGHT,
        margin: 20,
        hideDelay: 1500,
        showValue: true,
    },
    brightness: {
        position: Astal.WindowAnchor.LEFT,
        margin: 20,
        hideDelay: 1500,
        showValue: true,
    },
    lock: {
        spacing: 5,
        caps: {
            hideDelay: 1000,
        },
        num: {
            hideDelay: 1000,
        },
    },
};

// Services
export const math = {
    maxHistory: 100,
};

export const updates = {
    interval: 900000,
};

export const weather = {
    interval: 600000,
    key: "assets/weather-api-key.txt", // Path to file containing api key relative to the base directory. To get a key, visit https://weatherapi.com/
    location: "", // Location as a string or empty to autodetect
    imperial: false,
};

export const cpu = {
    interval: 2000,
};

export const gpu = {
    interval: 2000,
};

export const memory = {
    interval: 5000,
};

export const storage = {
    interval: 5000,
};
