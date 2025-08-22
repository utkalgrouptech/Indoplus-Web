import { logo, slider4 } from "@/assest/Home";
import NearMeIcon from '@mui/icons-material/NearMe';
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${slider4.src})` }} // Dynamically using the imported image
    >
      <div className="py-12 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div>
            <img src={logo.src} alt="Logo" className="mb-2 w-40" />
            <p className="text-sm mb-4">
              Indoplus is a premier technology consulting firm working with global companies to create cutting-edge solutions for the web and mobile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-red-500 text-lg font-bold mb-2">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:underline hover:text-red-600">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-red-600">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-red-600">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-red-600">
                  Cloud Server
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-red-600">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-red-600">
                  UI/UX Development
                </Link>
              </li>
            </ul>

          </div>

          {/* Information Section */}
          <div>
            <h4 className="text-red-500 text-lg font-bold mb-2">Information</h4>
            <ul className="space-y-2 text-sm ">
              <li><Link href="/" className="hover:underline hover:text-red-600" >Home</Link></li>
              <li><Link href="/about" className="hover:underline hover:text-red-600">About</Link></li>
              <li><Link href="/services" className="hover:underline hover:text-red-600">Services</Link></li>
              <li><Link href="/portfolio" className="hover:underline hover:text-red-600">Portfolio</Link></li>
              <li><Link href="/team" className="hover:underline hover:text-red-600">Team</Link></li>

            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h4 className="text-red-500 text-lg font-bold mb-2">Contacts</h4>
            <p className="text-sm mb-4">
              Arya Surya Enclave, Plot No- K5/475,
              Fourth Floor, Kalinga Vihar,
              Patrapada, Bhubaneswar,
              Dist- Khurdha, Odisha, India-751019.
            </p>
            <p className="text-sm mb-2"><Link href="tel:+919583333030">9583333030</Link></p>
            <p className="text-sm mb-2"><Link href="mailto:info@indoplus.net">info@indoplus.net</Link></p>
            <h4 className="text-red-500 text-lg font-bold mt-6">Newsletter</h4>
            <p className="text-sm mb-2">
              Do not miss out on our new feeds! Subscribe by filling the form below:
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2 px-4 rounded-md bg-gray-800 text-white"
              />
              <button className="absolute top-0 right-0 h-full px-4 bg-red-500 rounded-md">
                <i><NearMeIcon /></i>
              </button>
            </div>
          </div>
        </div>
        <div className="  text-center text-sm text-gray-400">
          Indoplus © 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
