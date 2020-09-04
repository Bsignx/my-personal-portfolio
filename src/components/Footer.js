import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          Copyright&copy;{new Date().getFullYear()}
          <span>Bruno Mariano</span> Todos direitos reservados
        </h4>

      </div>
    </footer>
  )
}

export default Footer
