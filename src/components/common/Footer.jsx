const Footer = () => {
    return (
      <footer className="bg-[#0470EF] text-white">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo Section */}
            <div>
              <h2 className="text-2xl font-bold border-b-2 border-white inline-block pb-1">
                ServiceFinn
              </h2>
            </div>
  
            {/* About Us Section */}
            <div>
              <h3 className="font-semibold text-lg">About Us</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Official Store</a></li>
                <li><a href="#" className="hover:underline">Company</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
  
            {/* Get Help Section */}
            <div>
              <h3 className="font-semibold text-lg">Get Help</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Shipping</a></li>
                <li><a href="#" className="hover:underline">Payment</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Follow Us Section */}
            <div className="md:col-span-3 flex justify-center md:justify-end space-x-4 mt-6">
              <a href="#" className="text-xl hover:text-blue-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-xl hover:text-pink-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-xl hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl hover:text-red-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="bg-blue-900 text-white text-center py-3">
          © 2025 SERVICEFINN. All Rights Reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;
  