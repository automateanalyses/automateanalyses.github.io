import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Target, 
  Users, 
  Star,
  Menu,
  X,
  ArrowRight,
  Activity,
  LineChart,
  PieChart
} from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TradeFin Pro</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#trade-ideas" className="text-gray-700 hover:text-blue-600 transition-colors">Trade Ideas</a>
              <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors">Analytics</a>
              <a href="#tools" className="text-gray-700 hover:text-blue-600 transition-colors">Tools</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#trade-ideas" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Trade Ideas</a>
              <a href="#analytics" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Analytics</a>
              <a href="#tools" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tools</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Trading Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover profitable trade ideas with advanced analytics, real-time market data, and machine learning algorithms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                Start Trading Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600">$2.4M</div>
              <div className="text-gray-600">Total Profits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Market Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Ideas Section */}
      <section id="trade-ideas" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Top Trade Ideas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI algorithms analyze thousands of market signals to identify the most promising trading opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                symbol: 'AAPL',
                company: 'Apple Inc.',
                action: 'BUY',
                price: '$185.42',
                target: '$205.00',
                confidence: 94,
                trend: 'up'
              },
              {
                symbol: 'TSLA',
                company: 'Tesla Inc.',
                action: 'SELL',
                price: '$248.73',
                target: '$220.00',
                confidence: 87,
                trend: 'down'
              },
              {
                symbol: 'NVDA',
                company: 'NVIDIA Corp.',
                action: 'BUY',
                price: '$875.28',
                target: '$950.00',
                confidence: 91,
                trend: 'up'
              }
            ].map((trade, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{trade.symbol}</h3>
                    <p className="text-gray-600 text-sm">{trade.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    trade.action === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {trade.action}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Price:</span>
                    <span className="font-semibold">{trade.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Target:</span>
                    <span className="font-semibold">{trade.target}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Confidence:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${trade.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold">{trade.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streamlit App Section */}
      <section id="analytics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Analytics Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Interactive analysis tools powered by our proprietary algorithms
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Live Market Analysis</h3>
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Live Data</span>
              </div>
            </div>
            
            {/* Streamlit App Embed */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 min-h-[600px] flex items-center justify-center border-2 border-dashed border-blue-300">
              <div className="text-center">
                <Activity className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Streamlit App Integration</h4>
                <p className="text-gray-600 mb-6 max-w-md">
                  This section will contain your embedded Streamlit application with real-time market data, 
                  interactive charts, and advanced analytics tools.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-md mx-auto">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Integration Code:</strong>
                  </p>
                  <code className="text-xs bg-gray-100 p-2 rounded block">
                    &lt;iframe src="https://your-streamlit-app.com" 
                    width="100%" height="600"&gt;&lt;/iframe&gt;
                  </code>
                </div>
              </div>
            </div>
            
            {/* Sample Charts */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <LineChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Price Analysis</h4>
                <p className="text-sm text-gray-600">Real-time price movements</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Volume Tracking</h4>
                <p className="text-sm text-gray-600">Market volume indicators</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <PieChart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Portfolio Analytics</h4>
                <p className="text-sm text-gray-600">Risk assessment tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Trading Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to make informed trading decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: 'Technical Analysis',
                description: 'Advanced charting tools with 50+ technical indicators and pattern recognition.'
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'AI Predictions',
                description: 'Machine learning algorithms predict market movements with 95% accuracy.'
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: 'Risk Management',
                description: 'Automated stop-loss and take-profit levels to protect your investments.'
              },
              {
                icon: <Activity className="h-8 w-8" />,
                title: 'Real-time Alerts',
                description: 'Get instant notifications when your watchlist stocks meet your criteria.'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Social Trading',
                description: 'Follow top performers and copy their successful trading strategies.'
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: 'Premium Support',
                description: '24/7 expert support and personalized trading recommendations.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Trading Smarter?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who trust our AI-powered platform
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg inline-flex items-center">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">TradeFin Pro</span>
              </div>
              <p className="text-gray-400">
                AI-powered trading platform for the modern investor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Trade Ideas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Watchlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TradeFin Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;