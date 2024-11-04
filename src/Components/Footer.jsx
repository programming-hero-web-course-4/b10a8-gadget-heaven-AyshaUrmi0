import Heading from "./Heading";

const Footer = () => {
  return (
    <footer className="p-10 bg-neutral text-neutral-content">
      <div className="mb-6 text-center">
        <Heading
          title="Gadget Heaven"
          subtitle="Empowering Your Tech Journey with Gadget Heaven."
        />
      </div>
      <div className="flex justify-around">
        <nav>
          <h6 className="footer-title">Services</h6>
          <div className="flex flex-col">
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
         <div className="flex flex-col">
         <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
         </div>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
         <div className="flex flex-col">
         <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
         </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
