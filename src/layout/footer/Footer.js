const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h2 className="text-lg font-bold mb-2">لینک ها</h2>
            <ul className="list-none">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">تماس با ما</h2>
            <p className="text-gray-400 mb-4">شماره تماس: 09914403585</p>
            <p className="text-gray-400">آدرس: تهران</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">به ما بپیوندید</h2>
            <ul className="list-none flex space-x-4 mt-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-4" />
        <p className="text-center text-gray-400 text-sm">
          © ۲۰۲۳ - علی امینی. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
