export default function Home() {
  // 课程数据
  const courses = [
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* 科技感背景元素 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiAvPjwvc3ZnPg==')]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      {/* 导航栏 */}
      <nav className="bg-black/30 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-white">李卓婷的个人页面</span>
            </div>
            <div className="flex items-center">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300">首页</a>
              <a href="#courses" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300">课程</a>
              <a href="#certificates" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-300">证书</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 个人信息部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">李卓婷</h1>
          <p className="text-xl text-blue-200 mb-2">广东科学技术职业学院</p>
          <p className="text-lg text-blue-300">商学院 商务数据分析与应用专业</p>
          <div className="mt-8 w-32 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* 课程列表部分 */}
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">我的课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-white/20"
            >
              <div className={`${course.color} p-4`}>
                <h3 className="text-xl font-semibold">{course.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300">{course.description}</p>
                <div className="mt-4">
                  <button className="text-blue-400 font-medium hover:underline">查看详情 →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 证书展示部分 */}
      <div id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">获取证书</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 border border-white/20">
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold">Python编程证书</h3>
            </div>
            <p className="text-gray-300 mb-4">Python基础课程结业证书</p>
            <p className="text-sm text-gray-400">颁发机构：广东科学技术职业学院</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 border border-white/20">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold">数据分析证书</h3>
            </div>
            <p className="text-gray-300 mb-4">数据分析技术课程结业证书</p>
            <p className="text-sm text-gray-400">颁发机构：广东科学技术职业学院</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 border border-white/20">
            <div className="bg-purple-100 text-purple-800 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold">数据库应用证书</h3>
            </div>
            <p className="text-gray-300 mb-4">数据库原理与应用课程结业证书</p>
            <p className="text-sm text-gray-400">颁发机构：广东科学技术职业学院</p>
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