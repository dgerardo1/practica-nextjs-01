import Link from "next/link";

export const metadata = {
    title: 'Tienda oficial'
}

const TiendaLayout = ({ children }) => {
  return (
    <>
        <h3>Sección Tienda</h3>

        <ul>
            <li>
                <Link href="/tienda/categorias">Categorías</Link>
            </li>
            <li>
                <Link href="/tienda/categorias/computadoras">Computadoras</Link>
            </li>
        </ul>
        { children }
    </>
  )
}

export default TiendaLayout