function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>CoopTech LLC</strong>
          <p>Local, reliable IT support in Alaska.</p>
          <p>
            <a href="tel:19074067901">907-406-7901</a>
          </p>
        </div>

        <div className="footer-tags">
          <span>IT Support Alaska</span>
          <span>Computer Help Near Me</span>
          <span>Smart Home Installation Alaska</span>
          <span>WiFi Setup &amp; Troubleshooting</span>
          <span>Digital Security &amp; Scam Help</span>
          <span>Tech Support Wasilla / Anchorage</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} CoopTech LLC – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
