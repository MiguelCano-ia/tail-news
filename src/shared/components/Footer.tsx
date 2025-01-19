import { Link } from "react-router";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-gray-200 dark:bg-gray-900 dark:text-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p>Your news portal for the latest updates and stories.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="flex gap-5 max-sm:flex-col">
                <li>
                  <Link to="/business">Business</Link>
                </li>
                <li>
                  <Link to="/health">Health</Link>
                </li>
                <li>
                  <Link to="/science">Science</Link>
                </li>
                <li>
                  <Link to="/sports">Sports</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic">
                <div>Email: m.cano1@utp.edu.c0</div>
                <div>Phone: +57 3137111718</div>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-primary text-center">
            <p>
              © {new Date().getFullYear()} Your Tail News Portal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
