import React, { useEffect, useState } from "react";
import "../../styles/home/Home.css";
import HomeLoanImg from "../../assets/Home_Loan.png";
import PersonalLoanImg from "../../assets/Personal_Loan.png";
import BusinessLoanImg from "../../assets/Business_Loan.png";
import VehicleLoanImg from "../../assets/Vechile_Loan.png";
import AgriculturalLoanImg from "../../assets/Agricultural_Loan.png";
import EducationalLoanImg from "../../assets/Educational_Loan.png";
import EmiCalculatorIcon from "../../assets/Emi_Calculator.png";

function Home() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          const yOffset = -100;
          const y =
            target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      })
    );
  }, []);

  const toggleMenu = () => {
    const navMenu = document.getElementById("navMenu")?.querySelector("ul");
    navMenu?.classList.toggle("show");
  };

  // EMI calculator state
  const [showModal, setShowModal] = useState(false);
  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState(""); // Will be formatted with commas
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState(null);

  // Interest rates based on loan type
  const interestRates = {
    "Home Loan": 8.5,
    "Personal Loan": 11.5,
    "Business Loan": 12.0,
    "Vehicle Loan": 9.2,
    "Agricultural Loan": 7.0,
    "Educational Loan": 10.25,
  };

  const calculateEMI = (e) => {
    e.preventDefault();

    const principal = parseFloat(amount.replace(/,/g, ""));
    const years = parseFloat(duration);
    const annualRate = interestRates[loanType] / 100;
    const n = years * 12;
    const r = annualRate / 12;

    const emi =
      (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const totalPayment = emi * n;
    const interest = totalPayment - principal;

    setResult({
      emi: emi.toFixed(2),
      totalEMIs: n,
      principal: principal.toFixed(2),
      interest: interest.toFixed(2),
      totalPayable: totalPayment.toFixed(2),
    });
  };



  return (
    <div className="home-page">
      {/* ✅ FIXED NAVIGATION WRAPPER */}
      <div className="lms-nav-fixed-bg">
        <header className="lms-navbar">
          <div className="lms-logo">
            <h2 style={{ margin: 0, color: "#ffffff" }}>SmartPurse</h2>
          </div>
          <nav id="navMenu">
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#loantypes">Loans</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/login" className="login-nav-btn">Login</a></li>
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMenu}>☰</div>
        </header>
        <hr className="navbar-divider" />
      </div>

      {/* HERO */}
      <div className="lms-hero-container">
        <section id="hero">
          <div className="lms-hero-content">
            <h1>Empowering Your Dreams Through Smarter Lending</h1>
            <p>
              At SmartPurse, we provide secure, simple, and quick loan services to help individuals and businesses
              achieve their financial goals. From personal loans to business expansion, we support your dreams with clarity and confidence.
            </p>
            <br />
            <a href="/Register" className="btn">Get Started !</a>
          </div>
        </section>
      </div>

      {/* LOAN TYPES */}
      <div className="lms-loan-list" id="loantypes">
        <h2 className="loan-types-heading">Explore Our Loan Solutions</h2>

        <div className="lms-loan-scroll-wrapper">
          <div className="lms-loan-scroll">
            {[
              {
                img: HomeLoanImg,
                title: "Home Loan",
                desc: "Finance your dream home with flexible interest rates (avg. 8.5%) and easy EMI options."
              },
              {
                img: PersonalLoanImg,
                title: "Personal Loan",
                desc: "Get unsecured loans quickly for travel, education, or emergencies (avg. 11.5% interest)."
              },
              {
                img: BusinessLoanImg,
                title: "Business Loan",
                desc: "Grow your business with tailored support (avg. interest around 12%) and fast processing."
              },
              {
                img: VehicleLoanImg,
                title: "Vehicle Loan",
                desc: "Own your dream vehicle with quick approval and avg. interest near 9.2%."
              },
              {
                img: AgriculturalLoanImg,
                title: "Agricultural Loan",
                desc: "Empowering farmers with seasonal credit (avg. 7% interest under government subsidy)."
              },
              {
                img: EducationalLoanImg,
                title: "Educational Loan",
                desc: "Invest in your future with student-friendly loans (avg. interest ~10.25%)."
              },
              {
                img: HomeLoanImg,
                title: "Home Loan",
                desc: "Finance your dream home with flexible interest rates (avg. 8.5%) and easy EMI options."
              },
              {
                img: PersonalLoanImg,
                title: "Personal Loan",
                desc: "Get unsecured loans quickly for travel, education, or emergencies (avg. 11.5% interest)."
              }
            ].map((loan, index) => (
              <div className="lms-loan-card" key={index}>
                <img src={loan.img} alt={loan.title} />
                <h3>{loan.title}</h3>
                <p>{loan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="lms-about-container">
        <section id="about">
          <h2>About SmartPurse</h2>
          <p>
            SmartPurse is your trusted partner in financial empowerment. We specialize in offering tailored loan solutions with transparency,
            fast processing, and customer-first service. Whether it's personal, housing, or business needs — we’re here to back your journey.
          </p>
          <p>
            Our vision is to transform how people experience lending. Through digital-first solutions, robust data security, and responsible financing,
            SmartPurse is committed to helping you achieve more.
          </p>
          <span className="lms-slogan">Dream Big. Borrow Smart. Achieve your dreams . . . ✍️</span>
        </section>
      </div>

      {/* CONTACT */}
      <div className="lms-contact-container">
        <section id="contact">
          <div className="lms-contact-wrapper">
            <h2>Contact Us</h2>
            <p>
              <a href="mailto:smartpurse@support.com" className="email-link">
                smartpurse@support.com
              </a>
            </p>
            <form action="https://formsubmit.co/potupurnasai7@gmail.com" method="POST">
              <div className="form-row">
                <input type="text" name="Name" placeholder="Name" required />
                <input type="tel" name="Phone" placeholder="Phone Number" pattern="[0-9]{10}" required />
              </div>
              <input type="email" name="Email" placeholder="Email" required />
              <label htmlFor="loanType">Choose the loan you're interested in:</label>
              <select name="Interested Loan" required>
                <option value="" disabled selected>Select a loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Vehicle Loan">Vehicle Loan</option>
                <option value="Agricultural Loan">Agricultural Loan</option>
                <option value="Educational Loan">Educational Loan</option>
              </select>
              <label htmlFor="duration">Select Loan Duration:</label>
              <select name="Loan Duration" required>
                <option value="" disabled selected>Select duration</option>
                <option value="< 6 months">less than 6 months</option>
                <option value="6 months">6 months</option>
                <option value="12 months">12 months (1 year)</option>
                <option value="24 months">24 months (2 years)</option>
                <option value="36 months">36 months (3 years)</option>
                <option value="60 months">60 months (5 years)</option>
                <option value=" > 60 months">more than 5 years</option>
              </select>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </div>

      {/* ✅ EMI Calculator Floating Icon */}
      <button className="emi-float" onClick={() => setShowModal(true)}>
        <img src={EmiCalculatorIcon} alt="EMI Calculator" />
      </button>

      {/* ✅ EMI Calculator Modal */}
      {showModal && (
      <div className="emi-modal-overlay" onClick={() => setShowModal(false)}>
        <div className="emi-modal" onClick={(e) => e.stopPropagation()}>
          <h2>EMI Calculator</h2>
          <form onSubmit={calculateEMI}>
            <label>
              Loan Type:
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Home Loan">Home Loan (8.5%)</option>
                <option value="Personal Loan">Personal Loan (11.5%)</option>
                <option value="Business Loan">Business Loan (12%)</option>
                <option value="Vehicle Loan">Vehicle Loan (9.2%)</option>
                <option value="Agricultural Loan">Agricultural Loan (7%)</option>
                <option value="Educational Loan">Educational Loan (10.25%)</option>
              </select>
            </label>
            <label>
              Loan Amount (₹):
              <input
                type="text"
                value={amount}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/,/g, "");
                  if (!isNaN(cleaned)) {
                    const formatted = Number(cleaned).toLocaleString("en-IN");
                    setAmount(formatted);
                  }
                }}
                required
              />
            </label>
            <label>
              Duration (in years):
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </label>

            <div className="emi-button-row">
              <button type="submit">Calculate EMI</button>
              <button type="button" className="close-btn" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>

          </form>

          {result && (
          <div className="emi-result">
            <table className="emi-table">
              <tbody>
                <tr>
                  <td><strong>Monthly EMI:</strong></td>
                  <td>₹{Number(result.emi).toLocaleString("en-IN")}</td>
                </tr>
                <tr>
                  <td><strong>Total EMIs:</strong></td>
                  <td>{result.totalEMIs}</td>
                </tr>
                <tr><td colSpan="2"><hr /></td></tr>
                <tr>
                  <td><strong>Loan Amount (Principal):</strong></td>
                  <td>₹{Number(result.principal).toLocaleString("en-IN")}</td>
                </tr>
                <tr>
                  <td><strong>Interest Payable:</strong></td>
                  <td>₹{Number(result.interest).toLocaleString("en-IN")}</td>
                </tr>
                <tr>
                  <td><strong>Total Payment (P + I):</strong></td>
                  <td>₹{Number(result.totalPayable).toLocaleString("en-IN")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}


        </div>
      </div>
    )}


      {/* FOOTER */}
      <div className="lms-footer-container">
        <footer>
          <p>&copy; 2025 SmartPurse. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
