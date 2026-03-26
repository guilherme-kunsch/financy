type ContainerProps = {
    children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return (
        <div className="w-[448px] h-[582px] bg-white rounded-xl shadow-md p-8 flex flex-col gap-6">
            {children}
        </div>
    );
}