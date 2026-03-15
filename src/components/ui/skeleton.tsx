export function Skeleton({
    className = "",
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`animate-pulse rounded-lg bg-gray-200 ${className}`}
            {...props}
        />
    );
}

export function CardSkeleton() {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white p-8">
            <Skeleton className="mb-4 h-10 w-10 rounded-full" />
            <Skeleton className="mb-2 h-5 w-3/4" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
        </div>
    );
}

export function TextSkeleton() {
    return (
        <div className="space-y-3">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
        </div>
    );
}
