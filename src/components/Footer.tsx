
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">iGenomics</h3>
            <p className="text-sm">
              Leading provider of genomics solutions and research equipment.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">DNA Analysis</a></li>
              <li><a href="#" className="hover:text-white">PCR Equipment</a></li>
              <li><a href="#" className="hover:text-white">Sequencing Kits</a></li>
              <li><a href="#" className="hover:text-white">Research Tools</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@igenomics.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Science Park</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 iGenomics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
