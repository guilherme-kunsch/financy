import type React from "react"
import LogoSvg from "../assets/logo.svg?react"

interface LogoProps extends React.ComponentProps<"svg"> {
    size?: number
}

export default function Logo({
    size,
    ...props
}: LogoProps) {
    return (
        <LogoSvg
            width={size}
            height={size}
            {...props}
        />
    )
}