import React from "react"
import Container from "../ui/Container"
import useSiteMeta from "../../hooks/use-site-meta"

const Footer = () => {
    const data = useSiteMeta()

    return (
        <footer className="py-8 text-center">
            <Container>
                © {[data.siteTitle, data.createdAt].join(' ')} - {new Date().getFullYear()} / Tous droits réservés.
            </Container>
        </footer>
    )
}

export default Footer
