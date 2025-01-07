export const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-gray-200 dark:bg-gray-900 dark:text-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sección 1 */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p>Your news portal for the latest updates and stories.</p>
            </div>

            {/* Sección 2 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>Sports</li>
                <li>Technology</li>
                <li>Business</li>
                <li>Lifestyle</li>
              </ul>
            </div>

            {/* Sección 3 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <span>Twitter</span>
                <span>Facebook</span>
                <span>Instagram</span>
              </div>
            </div>

            {/* Sección 4 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic">
                <div>Email: contact@news.com</div>
                <div>Phone: (123) 456-7890</div>
              </address>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-700 text-center">
            <p>© 2024 Your News Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
