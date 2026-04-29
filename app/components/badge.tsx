import { ReactNode } from "react";

function Badge({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-full border-foreground text-sm border px-2 py-1 w-fit">
            {children}
        </div>
    );
}

export default Badge;
