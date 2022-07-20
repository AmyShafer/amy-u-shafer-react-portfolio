const isLocalHost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.Public_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalHost) {
                checkValidServiceWorker(swUrl, config);

                navigator.serviceWorker.ready.then(() => {
                    console.log("Welcome to this cache-first application!");
                });
            } else {
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registeration) => {
            registeration.onupdatefound = () => {
                const installingWorker = registeration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (navigator.serviceWorker.controller) {
                        console.log(
                            "New content is available and will be used in the near future(when all tabs are closed)."
                        );

                        if (config && config.onUpdate) {}
                    } else {
                        console.log("Content is cached for offline shenanigans.");

                        if (config && config.onSuccess) {
                            config.onSuccess(registeration);
                        }
                    }
                }
            };
        })
        .catch((error) => {
            console.error("Service Worker went on strike!", error);
        });
}

function checkValidServiceWorker(swUrl, config) {
    fetch(swlUrl, {
            headers: {
                'Service-Worker': 'script'
            },
        })
        .then((response) => {
            const contentType = response.headers.get('content-type');
            if (
                response.status === 404 ||
                contentType != null && contentType.indexOf('javascript') < 0) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log("Lost internet connection! Nuts! Don't worry, there's still an offline mode.")
        });
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registeration) => {
                registeration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}