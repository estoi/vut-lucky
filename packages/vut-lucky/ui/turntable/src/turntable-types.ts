import type { PropType, ExtractPropTypes } from "vue"

type ShadowType = PropType<"always" | "hover" | "never">

export const turntableProps = {
    shadow: {
        type: String as ShadowType,
        default: "always"
    },
    header: {
        type: String,
        default: ""
    },
    bodyStyle: {
        type: Object,
        default: () => ({
            padding: "20px"
        })
    }
} as const

export type TurntableProps = ExtractPropTypes<typeof turntableProps>