import { ReactNode } from "react"

export function AppPad({children, className}: {children: ReactNode, className?: string}) {
    return (
        <div className={`px-5 w-full md:px-12 ${className}`}>
            {children}
        </div>
    )
}

export function CustomAppPad({children, className}: {children: ReactNode, className?: string}) {
    return (
        <div className={`px-5 w-full md:px-12 ${className}`}>
            {children}
        </div>
    )
}