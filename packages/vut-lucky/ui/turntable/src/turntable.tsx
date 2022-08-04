import { defineComponent, computed } from "vue"
import { turntableProps, TurntableProps } from "./turntable-types"
import "./turntable.scss"
import { useNamespace } from "../../shared/hooks/use-namespace"

export default defineComponent({
    name: "VTurntable",
    props: turntableProps,
    setup(props: TurntableProps, { slots }) {
        const ns = useNamespace("turntable")

        console.log(ns.b(), ns.e("nse"), ns.m("nsm"), ns.em("em", "open"))

        const boxClass = `${ns.b} ${ns.m(props.shadow)}-shadow`
        const isHeader = computed(() => {
            return props.header || slots.header
        })

        return () => (
            <div class={boxClass}>
                <div class={ns.m("header")} v-show={isHeader}>
                    { (slots.header && slots.header()) || props.header }
                </div>
                <div class={ns.m("body")} style={props.bodyStyle}>
                    { slots.default && slots.default() }
                </div>
            </div>
        )
    }
})