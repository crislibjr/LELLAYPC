// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          Lusaka East Luangwa Apostle Area &middot; Young People&rsquo;s Choir
        </p>
        <p className="site-footer__fine">
          New Apostolic Church Zambia &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
