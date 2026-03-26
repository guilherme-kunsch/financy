import Icon from "./icon"
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
    "w-sm py-3 px-4 rounded cursor-pointer font-medium flex items-center justify-center gap-2",
    {
        variants: {
            variant: {
                primary: "hover:bg-green-700 text-white bg-green-800",
                secondary: "text-black border border-gray-300",
            },
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);

export const buttonVariantsIcons = cva("transition", {
    variants: {
        variant: {
            primary: "fill-gray-700",
            secondary: "fill-gray-500",
        },
        size: {
            sm: "h-6",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
})


interface InputProps
    extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof buttonVariantsIcons> {
    icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({ icon: IconComponent, children, className, variant, ...props }: InputProps) {
    return (
        <button className={buttonVariants({ className, variant })} {...props}>
            {IconComponent && (
                <Icon
                    svg={IconComponent}
                    className={buttonVariantsIcons({ variant, size: "sm" })}
                />
            )}
            {children}
        </button>
    )
}