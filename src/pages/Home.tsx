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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-blue-600">李卓婷的个人页面</span>
            </div>
            <div className="flex items-center">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">首页</a>
              <a href="#courses" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">课程</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 个人信息部分 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">李卓婷</h1>
          <p className="text-xl text-gray-600 mb-2">广东科学技术职业学院</p>
          <p className="text-lg text-gray-500">商学院 商务数据分析与应用专业</p>
          <div className="mt-8 w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* 课程列表部分 */}
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">我的课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${course.color} p-4`}>
                <h3 className="text-xl font-semibold">{course.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{course.description}</p>
                <div className="mt-4">
                  <button className="text-blue-600 font-medium hover:underline">查看详情 →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">© 2026 李卓婷的个人页面</p>
        </div>
      </footer>
    </div>
  )
}