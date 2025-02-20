import Link from "next/link"

export const Header = () => {
    return (
    <header style={{ padding: "10px", background: "#333", color: "white" }}>
    <h1>My Recipe App</h1>
      <nav style = {{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Link href="/" style= {{
            color: "white",
            textDecoration: "none",
        }}>Home</Link> | <Link href="/Recipies" style= {{
            color: "white",
            textDecoration: "none",
        }}>Recipes</Link>
      </nav>
        </header>

    )
}
  