import { useNavigate } from 'react-router-dom';
import { FaBookmark, FaFolder, FaShareAlt } from 'react-icons/fa';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/*Header*/}
      <header className="absolute top-0 right-0 p-6">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/signin')}
            className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/*Hero Section*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block">Your Digital Life,</span>
            <span className="text-blue-600">Perfectly Organized</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Brainly helps you save, organize, and access your favorite web content in one beautiful, intuitive space.
          </p>
          <div className="mt-10">
            <button
              onClick={() => navigate('/signup')}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Start Organizing Now
            </button>
            <p className="mt-4 text-gray-500 text-sm">No credit card required • Free forever</p>
          </div>
        </div>

        {/*Features Section*/}
        <div className="mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FaBookmark className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Effortless Saving</h3>
              <p className="text-gray-600 leading-relaxed">
                Bookmark any webpage in seconds with our browser extension. Your favorite content is always just a click away.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FaFolder className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Smart Categories</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically sort and tag your bookmarks. Find exactly what you need with powerful search and filters.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FaShareAlt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Seamless Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborate with teams or share your collections with friends. Work together, stay organized.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <footer className="bg-white border-t border-gray-100 mt-24">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Brainly. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-gray-400">
              Made with ❤️ for organized minds
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;