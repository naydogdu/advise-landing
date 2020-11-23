import React from "react"
import Container from "../ui/Container"

const Footer = () => (
    <footer className="py-8 text-center">
        <Container>
            © Advise Communication 2000 - {new Date().getFullYear()} / Tous droits réservés.
        </Container>
    </footer>
)

export default Footer
