
const Footer = () => {
    return (


        <footer className="footer grid grid-cols-2 p-10 bg-base-200 text-base-content !z-50">
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> 
        <form>
          <header className="footer-title">Newsletter</header> 
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
              <button className="btn  btn-neutral join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

    );
};

export default Footer;