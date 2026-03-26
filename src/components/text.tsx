type TextProps = {
    title: string
    subtitle: string
}

export default function Text({ title, subtitle }: TextProps) {
    return (
        <div className="w-sm flex flex-col justify-center items-center p-6">
            <h1 className="font-bold text-xl text-gray-800 pb-1">{title}</h1>
            <h2 className="text-gray-600 text-base">{subtitle}</h2>
        </div>
    )
}