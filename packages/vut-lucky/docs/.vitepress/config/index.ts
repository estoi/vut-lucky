import nav from "./nav"
import markdown from "./markdown"
import sidebar from "./sidebar"

export default ({ mode }) => {
    return {
        lang: "zh-CN",
        title: "vut-lucky",
        description: "vut-lucky 抽奖组件库",
        lastUpdated: true,
        head: [
            [
                "link",
                {
                    rel: "icon",
                    type: "image/svg+xml",
                    href: "/lucky.svg"
                }
            ],
            [
                "link",
                {
                    rel: "stylesheet",
                    href: "https://unpkg.com/vue3-ccui/theme/darkTheme.css"
                }
            ]
        ],
        markdown,
        themeConfig: {
            sidebar,
            nav,
            logo: "/lucky.svg"
        }
    }
}