import Icon from "./icon"

type InputProps = React.ComponentProps<"input"> & {
    icon?: React.ComponentProps<typeof Icon>["svg"];
    rightIcon?: React.ComponentProps<typeof Icon>["svg"];
    title: string
}

export default function Input({
    icon,
    rightIcon,
    title,
    className,
    ...props
}: InputProps) {
    return (
        <div>

            <p className="pb-2">{title}</p>
            <div className="relative flex items-center w-full border border-gray-300 rounded py-3 px-4">

                {icon && (
                    <Icon
                        svg={icon}
                        className="w-4 h-4 fill-gray-300 mr-2 block"
                    />
                )}

                <input
                    className="flex-1 outline-none bg-transparent pr-8"
                    {...props}
                />

                {rightIcon && (
                    <Icon
                        svg={rightIcon}
                        className="w-4 h-4 fill-gray-400 absolute right-3 cursor-pointer"
                    />
                )}
            </div>
        </div>
    )
}