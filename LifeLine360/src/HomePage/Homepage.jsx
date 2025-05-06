import React from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom'
export default function HomePage() {
  const navigate =useNavigate();

  const handleGetStarted = () => {
    alert("Redirecting to registration...");
  };

  const handleLearnMore = () => {
    alert("Scrolling to services...");
  };
  
    
  return (
    <div>
       
      {/* Hero Section */}
      <section className="hero" id='home'>
        <h1>Complete 360° solution for modern healthcare</h1>
        <p>Connecting patients, doctors, pharmacies, and labs on one platform.</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleGetStarted}>Get Started</button>
          <button className="btn-outline" onClick={handleLearnMore}>Learn More</button>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="service-card" onClick={() => navigate('/doctor')}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPklEQVR4nN2ZSWgUQRSGP+OSuKDmoOCGGlckSETUi/tBgijicooGPQkeRFBUvOTiQS+CXgIiSBRBMcRLvCQHIbgSRcUogpCgBjUSCUEdccnY8uA1NDPTnZqe6qmJP/xMU/3qvfpnqupVvQF7WAGcAJqBJ8BnYAD4qxzQtsdqcxyooYSwRgfnxWQnsMq1iMXAjwJE+EwBi1wKOWZBhE/x5QwXDAboYzi78w51cMuikBaHOowWuQ+TRe8MfcMMPgy5+nzCEco1P9gSIr7EZ9GxwHA3ihp8JqtcCNmYgJANLoTUJyBknwshp4CvQBfQoecr4WugO3DWSiv9s1a32vj2HepDfInPomMWMNaiP/ElPp1gHFANrAQ26ecyXbTTgEpglLJS2+TdQrX1uVR9OcE2YNBw7puwH9jqQkiXRRE+X7gQkkpASMqFkIEEhHxxIeTV/zK1riQg5LILIbsSELLDhZAK4J1FEW9dnX4F+y0KcXLO8iEZ+4YFES3qyykmAvcLEHEPmECJoAK4GkNEk/YtOdQCzw0EPAO2MAJQAzTo+rmrvK5tJVXvHQ7lemyv0mO9cK622bzDWMUk/dwO3NHcko6YVkNAD9AO7NW+stjLKDLG6KAvAu+B24GCdlh5KIzrtW+jXoObgD1JJ8Z5wBktpAUHI9/+fLVpj3FAnKz39eA7uWSds12hn6PF6p8RgxKBgp15CDmofQ5H2KSBm3o1jo0yDWZygerXfCDTrtfAflATqeClgf1v4GycjUKqGQ/znO912rfBwFZ+YcHmPGN0ArNNRVTrIvbypOQKwUz9BsPsZENYorYtMeL06hgjMQP4EMO5z+XqpznCpi2w9v7EjNMX9cuUxZhOmWw0mDL+5el0gbEehOWe3QU6Fn7T7TRsEUuyHK3FuLD/Vrw8KLtkFvLJAVE8pP6O5Hjn13brLMVqyyXExjfkaXVFMAX4HmiXPDRd3xVyf/EC/JhLiGeRa9XnpUCb3FfQ06/NWFmw6fxajkGvziGu5IX8CkyjR8BTfZ6aMd1KXogHnAxUWg7o89EE4mTBdoAe3efHK6VK8mYkCvEy/u+oTShGFpII0hrw3zqShQwB6/QmKM+JCfkHfuqajQHBmiEAAAAASUVORK5CYII=" alt="medical-doctor"></img>
          <h3>Doctor Dashboard</h3>
          <p>Book online or in-person consultations</p>
        </div>
        <div className="service-card" onClick={() => navigate('/medicine-ordering')}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACs0lEQVR4nO2ay27TQBSGvz0RKxZt0woBFeVRkEK65vIE0LCoCPAABfbsKOIBqkJZlbAqCxCvQMW2vEDbdNEQqkEj/ZZGlm9j12MX8kuWHJ+c8fk95zZjwwwXE3eAPeAEMIGPse7dq0riRQPGm5Rjo8pM2AFOgSEwT3jMA09lgyk7M1+kbEk0jWeyxbqZN8ZSnqN5zMmW4zLKkW+2BaasPTMiNcH8tzPyCpj8C0QmsULUFhhfe+IV1RdLwAD4DOyrtTnR+QhYAxbbTKQLbALTAu3GGbANXG0bkVUVKyPX3ALuAivAJR32/J5kkftanX5bYuSxnrDRU75WQOc68MGZHeuK507kpUfWWpUhf4B1/PFEunaMflN1pOu4UxKJ28AvZ5wDXUsiY+VHOR12bUTeOe6UhIOEeLPXkrAj+WYFe0opLsklJhkxEdfPGu+Gxppqpn3tyUSW4kCyLQ/9PEO2JX9Uwp5MZCmOJLPpNC0m0oikxcwDXd8NSeSnZDdzYuKrI/+WEzMrurYfkki0euxUuFH8/x39Hpewx+tGLo5rIHLZScO+9njdqIxrWXeK8L2NrjVKCfYkMq0O9rUa0+/DEvZkIktxUcVrogawiH7WeMtNFUSLt5LbLrZqi/JR8jcV7CmtuOBkL9v4xRGPmbSmcSj5Yc5mYK2bD32njU8ik4eh08b3cv5b+8Jq4CysdtQA5mHZcaczJQ/Om0ha+szbuT/S/yfKQPeBWyqaHZ3bFPse+O24U9EddhOCiMUV4HXBzYep1h4+rypMKCIRuqoFn4Af6p3GOt+VLC3FNhojoWDq3HwICVNXHQkNMyPCbEZqgSn7YKM+qonX0nF0c1aPmdiTsn3P3TSeV3k93ZPyqd5z2243NBZEIioHpT/l2CjQbrT+E44IPU1ptAV0IT+qmYGA+AtnQCqvY10peAAAAABJRU5ErkJggg==" alt="medicine-cabinet"></img>
          <h3>Medicine Ordering</h3>
          <p>Order medicines from your nearby pharmacy</p>
        </div>
        <div className="service-card" onClick={() => navigate('/lab-booking')}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRElEQVR4nO2ZO2hUQRSGvwRNRDAiEgshTXxARNAQEMRGBRGilYW1EhAhBBHZ0kCaRGIhomghgoidECIkaqG2aQTBQpGQ2PgoVERNkZiXDJyFn8tedryZvTtL7gfTnJk55z8zc2d2ZiEsW4AB4JinPTruAavAMtBVwb4E7CNi7ptQV66L/YHYbxMxZ0XoY7EfFfsHIuaaCB0We5vYfxExUyK0N2UG3hEprcBfE7loo15pZm4RKZtF5B+gSeompO4MkdIEfBWhuo2+FLtbTtFvo0tAZ8o5oPboaPiTuCBvdgMlYBSYBJ56lknrUzIfdWNGdpesZaZIYA246R9MjOhUlaJtB+u9hMqoqJBtc6NIoN4UMxDbDOzyPCOioEcEudcIxxUP8StEcol5L6Jeec7Ail1y6s6dxC1sDw3ESRvJcgLnaCDaE9fHsYx+tgIPgUfAdnLkiYj/7Bm8UpsB8eN85sL5xMd4wqNP+U78LPFacSSxDC+QA2MS8IZnn9/SZ1ui7qbUzQF7qTHHgY/AOLDJs89VS+JuyoPYW0niNbCRGuCcbvBol+VjPADMSxJDBOYQ8B34UmWvT1vrPsmWJAH3NHmYQLQA0+K8P+Nar5Zss53k5f7TFnvNXBSnP4GdGde6T7IdFiPorjThOfr/S1qywc8G3SH2U3sOSrw3IRy+yPn3Tp/Eex7C4WVx+A04FerjSuB8ngZ+SLxLBKDNDq7VnMusvWoHodt+tOUl/pMdbkHZAYzYn3QLNRC9YL6HLVZBQcF64B8mGnegjJ373AAAAABJRU5ErkJggg==" alt="acid-flask"></img>
          <h3>Lab Test Booking</h3>
          <p>Book and manage pathology lab tests</p>
        </div>
        <div className="service-card" onClick={() => navigate('/patient-dashboard')}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdUlEQVR4nOVUQQ7AIAziedPs/w8YD2GXzpMeymKiGwknsSSQFvgSKgACUIcEUExtw+iDgpepbXgezw4VdLQ/NeDsDkoMGQ0/3hpYmG7ARK7VWbRMrnRKzkBL9lUTucoxyOSq7U+FljRgogM6e5BZtOIcuz1xA5NQ7eH2QlaNAAAAAElFTkSuQmCC" alt="dashboard-layout"></img>
          <h3>Patient Dashboard</h3>
          <p>Manage medical history and appointments</p>
        </div>
        <div className="service-card" onClick={() => navigate('/pharmacist-dashboard')}>
          <img src="data:image/png;base64,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"></img>
          <h3>Pharmacist Dashboard</h3>
          <p>Manage medicine stock and import-export History</p>
        </div>
        <div className="service-card" onClick={() => navigate('/admin-dashboard')}>
          <img src="data:image/png;base64,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" alt="medical-doctor"></img>
          <h3>Admin Dashboard</h3>
          <p>View and Manage all things related to Website</p>
        </div>
        <div className="service-card" onClick={() => navigate('/emergency-dashboard')}>
          <img src="data:image/png;base64,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" alt="medical-doctor"></img>
          <h3>Emergency Dashboard</h3>
          <p>Fast response and Manage related to emergency</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial" id='about'>
        <h2>Testimonials</h2>
        <blockquote>
          “LifeLine360* is a healthcare website designed to solve major problems in the medical field.
          It connects doctors, medical stores, pharmacists, and patients on one platform.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h4>Quick Links</h4>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>info@lifeline360.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 LifeLine360</p>
        </div>
      </footer>
    </div>
  );
}