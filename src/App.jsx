import React, { useEffect, useState } from "react";

function App() {
  // Dark / Light theme
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("cooptechTheme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("cooptechTheme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Admin: editable hero text
  const defaultHero = {
    title: "Full-Service Tech Support You Can Count On",
    subtitle:
      "CoopTech provides complete home and business technology solutions — from computer repairs and custom PC builds to smart home systems, WiFi upgrades, home theater installs, and 1-on-1 tech help.",
  };

  const [heroContent, setHeroContent] = useState(defaultHero);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState("");

  useEffect(() => {
    const storedHero = localStorage.getItem("cooptechHero");
    if (storedHero) {
      try {
        setHeroContent(JSON.parse(storedHero));
      } catch {
        setHeroContent(defaultHero);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cooptechHero", JSON.stringify(heroContent));
  }, [heroContent]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCode.trim() === "cooptech") {
      setIsAdmin(true);
      setAdminCode("");
    } else {
      alert("Incorrect admin code. Try again.");
    }
  };

  const handleServiceRequest = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    form.reset();
    alert("Thanks! Your request has been sent. We’ll get back to you soon.");
  } catch (err) {
    console.error(err);
    alert("Sorry, something went wrong sending your request. You can always call 907-406-7901.");
  }
};


  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <div className="brand-mark">AK</div>
            <div className="brand-text">
              <span className="brand-name">CoopTech</span>
              <span className="brand-tagline">Trusted IT Support in Alaska</span>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
         

            <button
              type="button"
              className="btn theme-toggle"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

            <a href="tel:19074067901" className="nav-call">
              907-406-7901
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="container hero-inner">
            <div className="hero-content fade-in">
              <p className="eyebrow">Local · Friendly · Reliable</p>
              <h1>{heroContent.title}</h1>
              <p className="hero-subtitle">{heroContent.subtitle}</p>

              <div className="hero-actions">
                <a href="tel:19074067901" className="btn btn-primary">
                  Call for Tech Help · 907-406-7901
                </a>
                <a href="#services" className="btn btn-ghost">
                  See What We Do
                </a>
              </div>

              <div className="hero-badges">
                <span>Smart Home & Smart Lighting</span>
                <span>Computer Repair & Builds</span>
                <span>Whole-Home WiFi</span>
                <span>Home Theater Setup</span>
                <span>1-on-1 Tech Support</span>
              </div>
            </div>

            <div className="hero-card slide-up">
              {/* Hero image – put a real pic here */}
              <img
                src="/images/Alaska shape.png"
                alt="Tech support at home"
                className="hero-image"
              />
              <h2>Technology Made Simple</h2>
              <p>
                We handle everything technology-related. If it plugs in, connects
                to WiFi, or has an app — we can help.
              </p>
              <ul className="hero-list">
                <li>Home theater installs & TV mounting</li>
                <li>Smart home / smart lighting setup</li>
                <li>WiFi upgrades & network cleanup</li>
                <li>PC repair, cleaning & custom builds</li>
                <li>One-on-one help with your devices</li>
              </ul>
              <a
                href="tel:19074067901"
                className="btn btn-outline btn-block"
              >
                Tap to Call · 907-406-7901
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container">
            <header className="section-header">
              <p className="eyebrow">What We Offer</p>
              <h2>Complete Technology Services for Home & Business</h2>
              <p className="section-lead">
                CoopTech handles everything technology-related. From home theater
                and smart lighting to full custom PC builds and small-business IT
                support — we’ve got you covered.
              </p>
            </header>

            <div className="grid services-grid">
              <div className="card hover-raise">
                <div className="card-icon">🖥️</div>
                <h3>Computer Repair & Tune-Ups</h3>
                <p>
                  Diagnostics, cleaning, virus removal, performance tune-ups, OS
                  fixes, and data backup help.
                </p>
              </div>

              <div className="card hover-raise">
                <div className="card-icon">⚙️</div>
                <h3>Custom PC Builds</h3>
                <p>
                  Gaming rigs, editing workstations, streaming setups, and
                  specialized builds tailored to how you use your computer.
                </p>
              </div>

              <div className="card hover-raise">
                <div className="card-icon">📡</div>
                <h3>WiFi & Networking</h3>
                <p>
                  Full-home WiFi coverage, mesh systems, router installs, slow
                  internet troubleshooting, and shop/office networking.
                </p>
              </div>

              <div className="card hover-raise">
                <div className="card-icon">🏠</div>
                <h3>Smart Home & Smart Lighting</h3>
                <p>
                  Smart switches, bulbs, thermostats, doorbells, cameras, and
                  automations so everything works from your phone.
                </p>
              </div>

              <div className="card hover-raise">
                <div className="card-icon">🎬</div>
                <h3>Home Theater & Audio</h3>
                <p>
                  TV mounting, soundbars, surround sound, projectors, cable
                  management, and streaming setup.
                </p>
              </div>

              <div className="card hover-raise">
                <div className="card-icon">🤝</div>
                <h3>1-on-1 Tech Support</h3>
                <p>
                  Patient, step-by-step help using your devices, apps, accounts,
                  email, cloud storage, or anything tech.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section section-alt">
          <div className="container">
            <header className="section-header">
              <p className="eyebrow">Pricing</p>
              <h2>Simple, Straightforward Rates</h2>
              <p className="section-lead">
                Every job is a little different, but here’s a basic idea of what
                you can expect. Call for a quick quote for your specific project.
              </p>
            </header>

            <div className="pricing-grid">
              <div className="pricing-card hover-raise">
                <div className="badge">Most Popular</div>
                <h3>In-Home Tech Help</h3>
                <p className="price">Call for Rate</p>
                <ul>
                  <li>Computer help, WiFi, smart home, TV, & more</li>
                  <li>Travel within local service area</li>
                  <li>Perfect for “can you just come over and fix it?”</li>
                </ul>
              </div>

              <div className="pricing-card hover-raise">
                <h3>Remote Support</h3>
                <p className="price">Call for Rate</p>
                <ul>
                  <li>Help over the phone or remote desktop</li>
                  <li>Quick fixes without a house visit</li>
                  <li>Great for software issues & questions</li>
                </ul>
              </div>

              <div className="pricing-card hover-raise">
                <h3>Projects & Installs</h3>
                <p className="price">Free Estimates</p>
                <ul>
                  <li>Home theater installs & full smart home setup</li>
                  <li>Shop/office networking & camera systems</li>
                  <li>Custom PC builds & multi-room audio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section">
          <div className="container">
            <header className="section-header">
              <p className="eyebrow">Gallery</p>
              <h2>Recent Installs & Tech Setups</h2>
              <p className="section-lead">
                A peek at the kind of work we do — from clean TV wall mounts and
                home theaters to smart lighting and network racks.
              </p>
            </header>

            <div className="gallery-grid">
              <img
                src="/images/Mounted TV.png"
                alt="Mounted TV and soundbar setup"
                className="gallery-img"
              />
              <img
                src="/images/Computer.png"
                alt="Home theater with projector"
                className="gallery-img"
              />
              <img
                src="/images/network1.png"
                alt="Smart lighting in a living room"
                className="gallery-img"
              />
              <img
                src="/images/homesecurity.png"
                alt="Neat network and router setup"
                className="gallery-img"
              />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="section section-alt">
          <div className="container">
            <header className="section-header">
              <p className="eyebrow">Reviews</p>
              <h2>What People Say About CoopTech</h2>
              <p className="section-lead">
                Real, local tech help you can trust. We focus on clear
                communication and getting it done right.
              </p>
            </header>

            <div className="reviews-grid">
              <div className="review-card hover-raise">
                <p className="review-text">
                  “Explained everything in plain English and cleaned up our whole
                  WiFi and smart TV setup. Super easy to work with.”
                </p>
                <p className="review-name">— Home User</p>
              </div>

              <div className="review-card hover-raise">
                <p className="review-text">
                  “Got our home theater and streaming dialed in. No more juggling
                  remotes or yelling at the TV.”
                </p>
                <p className="review-name">— Family in Alaska</p>
              </div>

              <div className="review-card hover-raise">
                <p className="review-text">
                  “We had a mess of wires and random WiFi extenders. CoopTech
                  turned it into a clean, fast network for our shop.”
                </p>
                <p className="review-name">— Small Business</p>
              </div>
            </div>

            <div className="reviews-cta">
              <a
                href="https://g.page/r/CbjiXO8q6wMeEAI/review"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Leave a Google Review
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT + SERVICE REQUEST */}
        <section id="contact" className="section">
          <div className="container subscribe">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Need Tech Help or a Quote?</h2>
              <p className="section-lead">
                Call, text, or send a service request. Tell us what’s going on
                and we’ll get you taken care of.
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:907-406-7901" className="phone-container">907-406-7901</a>
                
              </p>
            </div>

            <form
              className="subscribe-form"
              onSubmit={handleServiceRequest}
            >
              <label className="field-label">
                Name
                <input
                  type="text"
                  className="input"
                  name="name"
                  required
                />
              </label>

              <label className="field-label">
                Email
                <input
                  type="email"
                  className="input"
                  name="email"
                  required
                />
              </label>

              <label className="field-label">
                Phone
                <input
                  type="tel"
                  className="input"
                  name="phone"
                  placeholder="Optional but helpful"
                />
              </label>

              <label className="field-label">
                What do you need help with?
                <select name="serviceType" className="input">
                  <option>Computer repair or cleanup</option>
                  <option>Custom PC build</option>
                  <option>WiFi / networking</option>
                  <option>Home theater / TV mount</option>
                  <option>Smart home / smart lighting</option>
                  <option>General tech / 1-on-1 help</option>
                  <option>Business / shop setup</option>
                </select>
              </label>

              <label className="field-label">
                Brief description
                <textarea
                  className="input"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us what’s going on, what gear you have, and your location."
                ></textarea>
              </label>

              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Submit Service Request
              </button>

              <p className="helper">
               No commitment by requesting contact from CoopTech. We are easy going and want to help. Submit a contact request and we will give you a call.
              </p>
            </form>
          </div>
        </section>

      
          
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>CoopTech LLC</strong>
            <p>Complete technology services for Alaska.</p>
            <p>
              <a href="tel:19074067901">907-406-7901</a>
            </p>
          </div>

          <div className="footer-tags">
            <span>Computer Repair</span>
            <span>Home Theater Install</span>
            <span>Smart Home Setup</span>
            <span>WiFi Troubleshooting</span>
            <span>Custom PC Builds</span>
            <span>1-on-1 Tech Help</span>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} CoopTech LLC – All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
