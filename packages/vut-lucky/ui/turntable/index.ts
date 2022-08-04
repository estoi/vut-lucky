import type { App } from "vue"
import Turntable from "./src/turntable"

Turntable.install = function(app: App): void {
    app.component(Turntable.name, Turntable)
}

export { Turntable }

export default {
    title: "大转盘",
    category: "活动展示",
    status: "100%",
    install(app: App): void {
        app.component(Turntable.name, Turntable)
    }
}