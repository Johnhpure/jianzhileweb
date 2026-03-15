export default function Loading() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Animated spinner */}
                <div className="relative h-10 w-10">
                    <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
                    <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-blue-600" />
                </div>
                <p className="text-sm text-gray-400">加载中...</p>
            </div>
        </section>
    );
}
