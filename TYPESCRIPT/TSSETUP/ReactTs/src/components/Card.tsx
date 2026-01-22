import type { PropsWithChildren , ReactNode } from "react"

interface CardProp extends PropsWithChildren {
    title : string ;
    footer?: ReactNode
}

export function Card({title ,children ,footer} : CardProp) {
  return (
    <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}
