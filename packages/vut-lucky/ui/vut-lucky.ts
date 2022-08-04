import type { App } from 'vue';

import TurntableInstall, { Turntable } from './turntable';

const installs = [
    TurntableInstall
];

export {
    Turntable
};

export default {
    version: '1.0.8',
    install(app: App): void {
        installs.forEach((p) => app.use(p));
    }
};
