import { useState, useEffect } from 'react';

export default function Home() {
  // 动画状态
  const [isLoaded, setIsLoaded] = useState(false);
  // 密码保护状态
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(true);
  // 个人信息状态
  const [personalInfo, setPersonalInfo] = useState({
    name: '李卓婷',
    birthdate: '',
    email: '1910492869@qq.com',
    school: '广东科学技术职业学院',
    major: '商学院 商务数据分析与应用专业'
  });
  // 课程数据
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Python基础',
      description: '学习Python编程语言的基础语法和核心概念',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 2,
      name: '数据分析技术',
      description: '掌握数据清洗、分析和可视化的基本技术',
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 3,
      name: '数据采集与处理',
      description: '学习网络数据采集和数据预处理方法',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 4,
      name: '供应链数据分析',
      description: '应用数据分析技术优化供应链管理',
      color: 'bg-amber-100 text-amber-800'
    },
    {
      id: 5,
      name: '数据库原理与应用',
      description: '了解数据库设计原理和SQL语言应用',
      color: 'bg-red-100 text-red-800'
    }
  ]);
  // 证书数据
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: 'Python编程证书',
      description: 'Python基础课程结业证书',
      color: 'bg-green-100 text-green-800',
      issuer: '广东科学技术职业学院'
    },
    {
      id: 2,
      name: '数据分析证书',
      description: '数据分析技术课程结业证书',
      color: 'bg-blue-100 text-blue-800',
      issuer: '广东科学技术职业学院'
    },
    {
      id: 3,
      name: '数据库应用证书',
      description: '数据库原理与应用课程结业证书',
      color: 'bg-purple-100 text-purple-800',
      issuer: '广东科学技术职业学院'
    }
  ]);
  // 编辑模式状态
  const [editingSection, setEditingSection] = useState<string | null>(null);

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 处理课程变化
  const handleCourseChange = (id: number, field: string, value: string) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  // 处理证书变化
  const handleCertificateChange = (id: number, field: string, value: string) => {
    setCertificates(prev => prev.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  // 密码验证函数
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里使用简单的密码验证，实际项目中应该使用更安全的方式
    if (password === '123456') { // 默认密码为123456，您可以修改
      setIsAuthenticated(true);
      setShowPasswordInput(false);
    } else {
      alert('密码错误，请重试');
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* 科技感背景元素 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiAvPjwvc3ZnPg==')]"></div>
      </div>
      {/* 动态背景效果 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
      `}</style>

      {/* 密码输入界面 */}
      {showPasswordInput && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full border border-white/20">
            <h2 className="text-2xl font-bold text-center mb-6">请输入密码查看个人信息</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-gray-300 mb-2">密码</label>
                <input 
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="请输入密码"
                  required
                />
              </div>
              <div>
                <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  确认
                </button>
              </div>
              <p className="text-center text-sm text-gray-400">默认密码: 123456</p>
            </form>
          </div>
        </div>
      )}
      {/* 导航栏 */}
      <nav className="bg-black/30 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-white">李卓婷的个人页面</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300 transition-colors duration-300">首页</a>
              <a href="#personal-info" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300 transition-colors duration-300">个人信息</a>
              <a href="#courses" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300 transition-colors duration-300">课程</a>
              <a href="#certificates" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300 transition-colors duration-300">证书</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300 transition-colors duration-300">联系我</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 个人信息部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 pt-32">
        <div className="text-center transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{personalInfo.name}</h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-2">{personalInfo.school}</p>
          <p className="text-lg md:text-xl text-blue-300">{personalInfo.major}</p>
          <div className="mt-8 w-32 h-1 bg-blue-400 mx-auto rounded-full transform transition-all duration-1000 ease-out" style={{ width: isLoaded ? '8rem' : '0' }}></div>
          <div className="mt-12">
            <a href="#courses" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              查看我的课程
            </a>
          </div>
        </div>
      </div>

      {/* 个人信息编辑部分 */}
      {isAuthenticated && (
        <div id="personal-info" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}>个人信息编辑</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20 max-w-2xl mx-auto transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(30px)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={personalInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="birthdate" className="block text-gray-300 mb-2">出生年月</label>
                <input 
                  type="date" 
                  id="birthdate" 
                  name="birthdate" 
                  value={personalInfo.birthdate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-gray-300 mb-2">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={personalInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="school" className="block text-gray-300 mb-2">学校</label>
                <input 
                  type="text" 
                  id="school" 
                  name="school" 
                  value={personalInfo.school}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="major" className="block text-gray-300 mb-2">专业</label>
                <input 
                  type="text" 
                  id="major" 
                  name="major" 
                  value={personalInfo.major}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                保存信息
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 课程列表部分 */}
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}>我的课程</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20 max-w-5xl mx-auto transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(30px)' }}>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={course.id} className="border-b border-white/10 pb-6 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">课程名称</label>
                    <input 
                      type="text" 
                      value={course.name}
                      onChange={(e) => handleCourseChange(course.id, 'name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">颜色主题</label>
                    <select 
                      value={course.color}
                      onChange={(e) => handleCourseChange(course.id, 'color', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="bg-blue-100 text-blue-800">蓝色</option>
                      <option value="bg-green-100 text-green-800">绿色</option>
                      <option value="bg-purple-100 text-purple-800">紫色</option>
                      <option value="bg-amber-100 text-amber-800">琥珀色</option>
                      <option value="bg-red-100 text-red-800">红色</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">课程描述</label>
                    <textarea 
                      value={course.description}
                      onChange={(e) => handleCourseChange(course.id, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                  </div>
                </div>
                <div className={`${course.color} p-4 rounded-lg mt-4`}>
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                </div>
                <p className="text-gray-300 mt-2">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 证书展示部分 */}
      <div id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}>获取证书</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20 max-w-5xl mx-auto transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(30px)' }}>
          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <div key={cert.id} className="border-b border-white/10 pb-6 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">证书名称</label>
                    <input 
                      type="text" 
                      value={cert.name}
                      onChange={(e) => handleCertificateChange(cert.id, 'name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">颜色主题</label>
                    <select 
                      value={cert.color}
                      onChange={(e) => handleCertificateChange(cert.id, 'color', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="bg-green-100 text-green-800">绿色</option>
                      <option value="bg-blue-100 text-blue-800">蓝色</option>
                      <option value="bg-purple-100 text-purple-800">紫色</option>
                      <option value="bg-amber-100 text-amber-800">琥珀色</option>
                      <option value="bg-red-100 text-red-800">红色</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">颁发机构</label>
                    <input 
                      type="text" 
                      value={cert.issuer}
                      onChange={(e) => handleCertificateChange(cert.id, 'issuer', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">证书描述</label>
                    <textarea 
                      value={cert.description}
                      onChange={(e) => handleCertificateChange(cert.id, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                  </div>
                </div>
                <div className={`${cert.color} p-4 rounded-lg mt-4`}>
                  <h3 className="text-xl font-semibold">{cert.name}</h3>
                </div>
                <p className="text-gray-300 mt-2">{cert.description}</p>
                <p className="text-sm text-gray-400 mt-1">颁发机构：{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 联系部分 */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)' }}>联系我</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-8 border border-white/20 max-w-2xl mx-auto transform transition-all duration-1000 ease-out" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(30px)' }}>
          <div className="space-y-4">
            <p className="text-gray-300">如果你对我的课程或证书有任何疑问，欢迎联系我。</p>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-300">1910492869@qq.com</span>
            </div>
            <div className="mt-8">
              <a href="mailto:1910492869@qq.com" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                发送邮件
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">© 2026 李卓婷的个人页面</p>
        </div>
      </footer>
    </div>
  )
}