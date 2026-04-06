import type { PropsWithChildren, ReactNode } from "react";

interface Card2Props extends PropsWithChildren {
    title: string;
    footer?: ReactNode
}

export const Card2 = ({title, children, footer}: Card2Props) => {
    return (
        <div>
            <h3> {title}</h3>
            <div>{children}</div>
            {footer && <footer> {footer}</footer>}
        </div>
    );
}


