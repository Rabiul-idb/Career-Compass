

const Footer = () => {
    return (
        <footer class="footer text-base-content pb-12 pt-72 -mt-48 grid grid-cols-4 w-11/12 mx-auto">
  <nav>
    <h6 class="text-3xl font-bold text-black">Career Compass</h6>
    <p className="text-base font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ducimus perspiciatis eius laboriosam, modi ipsam 
    </p>
  </nav>
  <nav>
    <h6 class="footer-title text-xl font-semibold text-black">Company</h6>
    <a class="link link-hover text-base font-semibold">About us</a>
    <a class="link link-hover text-base font-semibold">Contact</a>
    <a class="link link-hover text-base font-semibold">Jobs</a>
    <a class="link link-hover text-base font-semibold">Press kit</a>
  </nav>
  <nav>
    <h6 class="footer-title text-xl font-semibold text-black">Legal</h6>
    <a class="link link-hover text-base font-semibold">Terms of use</a>
    <a class="link link-hover text-base font-semibold">Privacy policy</a>
    <a class="link link-hover text-base font-semibold">Cookie policy</a>
  </nav>
  <form>
    <h6 class="footer-title text-xl font-semibold text-black">Newsletter</h6>
    <fieldset class="form-control ">
      <label class="label">
        <span class="label-text text-base font-semibold">Enter your email address</span>
      </label>
      <div class="join">
        <input
          type="text"
          placeholder="username@site.com"
          class="input input-bordered join-item" />
        <button class="btn btn-info join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;