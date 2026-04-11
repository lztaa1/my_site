import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center">
          <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">课程详情</h1>
            <p className="mb-6">课程详情页面正在建设中，敬请期待！</p>
            <a href="/" className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300">
              返回首页
            </a>
          </div>
        </div>} />
        <Route path="/certificate/:id" element={<div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center">
          <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">证书详情</h1>
            <p className="mb-6">证书详情页面正在建设中，敬请期待！</p>
            <a href="/" className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300">
              返回首页
            </a>
          </div>
        </div>} />
      </Routes>
    </Router>
  );
}
