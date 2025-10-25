import useToken from "../../hook/useToken"
import { useState } from "react"
import {
  Bell,
  Search,
  ChevronLeft,
  ChevronDown,
  BarChart3,
  Clock,
  Package,
  Users,
  CheckCircle,
  Circle,
} from "lucide-react"

const Dashboard = () => {
  useToken("/login")
  const [selectedTab, setSelectedTab] = useState("All")

  // Data for main metrics
  const metrics = [
    {
      title: "Total revenue",
      value: "$53,00989",
      increase: "12% increase from last month",
      icon: <BarChart3 className="text-white" />,
      bgColor: "bg-purple-300",
    },
    {
      title: "Projects",
      value: "95",
      subValue: "/100",
      decrease: "10% decrease from last month",
      icon: <Package className="text-white" />,
      bgColor: "bg-orange-300",
    },
    {
      title: "Time spent",
      value: "1022",
      subValue: "/1300 Hrs",
      increase: "8% increase from last month",
      icon: <Clock className="text-white" />,
      bgColor: "bg-blue-300",
    },
    {
      title: "Resources",
      value: "101",
      subValue: "/120",
      increase: "2% increase from last month",
      icon: <Users className="text-white" />,
      bgColor: "bg-yellow-300",
    },
  ]

  // Data for projects table
  const projects = [
    {
      name: "Neisa web developement",
      manager: "Om prakash sao",
      dueDate: "May 25, 2023",
      status: "Completed",
      progress: "100%",
    },
    { name: "Datascale AI app", manager: "Nelisan mando", dueDate: "Jun 20, 2023", status: "Delayed", progress: "39%" },
    {
      name: "Media channel branding",
      manager: "Tiruvelly priya",
      dueDate: "July 13, 2023",
      status: "At risk",
      progress: "69%",
    },
    {
      name: "Cortex iOS app developement",
      manager: "Matte hannery",
      dueDate: "Dec 20, 2023",
      status: "Completed",
      progress: "100%",
    },
    {
      name: "Website builder developement",
      manager: "Sukumar rao",
      dueDate: "Mar 15, 2024",
      status: "On going",
      progress: "52%",
    },
  ]

  // Data for daily tasks
  const tasks = [
    { id: 1, text: "Create a user flow of social application design", status: "Approved" },
    { id: 2, text: "Create a user flow of social application design", status: "In review" },
    { id: 3, text: "Landing page design for Fintech project of singapore", status: "In review" },
    { id: 4, text: "Interactive prototype for app screens of deltamine project", status: "On going", completed: false },
    { id: 5, text: "Interactive prototype for app screens of deltamine project", status: "Approved" },
  ]

  // Data for workload
  const team = [
    { name: "Sam", days: ["07"], avatar: "S" },
    { name: "Meidy", days: ["08"], avatar: "M" },
    { name: "Ken", days: ["02"], avatar: "K" },
    { name: "Dmitry", days: [], avatar: "D" },
    { name: "Vego", days: ["08"], avatar: "V" },
    { name: "Kadin", days: ["02"], avatar: "K" },
    { name: "Malm", days: ["04"], avatar: "M" },
  ]

  // Returns appropriate color for status
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600"
      case "Delayed":
        return "bg-yellow-100 text-yellow-600"
      case "At risk":
        return "bg-red-100 text-red-500"
      case "On going":
        return "bg-orange-100 text-orange-500"
      case "In review":
        return "bg-red-100 text-red-500"
      case "Approved":
        return "bg-green-100 text-green-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  // Returns progress element
  const getProgressElement = (status, progress) => {
    const progressValue = Number.parseInt(progress)
    let progressColor = ""

    if (status === "Completed") progressColor = "border-green-500"
    else if (status === "Delayed") progressColor = "border-yellow-500"
    else if (status === "At risk") progressColor = "border-red-500"
    else if (status === "On going") progressColor = "border-orange-500"

    return (
      <div className="flex items-center">
        <div
          className={`h-8 w-8 rounded-full border-4 ${progressColor} flex items-center justify-center text-xs font-medium`}
        >
          {progress}
        </div>
      </div>
    )
  }

  // Function for task rendering
  const renderTaskIcon = (status, completed) => {
    if (completed === false) {
      return <Circle size={20} className="text-gray-400 mr-2" />
    } else {
      return (
        <CheckCircle
          size={20}
          className={`mr-2 ${status === "Approved" ? "text-green-500" : status === "In review" ? "text-red-500" : "text-orange-500"}`}
        />
      )
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-black text-white fixed left-0 top-0 h-full overflow-y-auto z-10">
        <div className="p-4 flex items-center gap-2 border-b border-gray-800">
          <div className="rounded-full bg-orange-500 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-lg font-bold">Mon-Blog</h1>
        </div>

        <div className="mt-8 px-4">
          <button className="bg-white/10 text-white rounded-full px-4 py-2 w-full flex items-center gap-2">
            <span className="text-2xl">+</span> Create new project
          </button>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2">
            <li className="px-4 py-2 bg-white/10 rounded-s-lg border-r-4 border-orange-500">
              <a href="#" className="flex items-center gap-3 text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
                Dashboard
              </a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Projects
              </a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Tasks
              </a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Time log
              </a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Resource mgmt
              </a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Users
              </a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                Project template
              </a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="flex items-center gap-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Menu settings
              </a>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button className="bg-orange-500 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-60 flex-1 p-6 bg-[#f4ece7]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full border">
              <ChevronLeft size={16} />
            </button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for anything..."
                className="pl-10 pr-4 py-2 rounded-full w-64 bg-white border-none focus:outline-none"
              />
            </div>

            <button className="p-2 bg-white rounded-full">
              <Bell size={20} />
            </button>

            <div className="flex items-center gap-2 bg-white rounded-full p-1 pl-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="pr-2">
                <p className="text-sm font-semibold">Alex melan</p>
                <p className="text-xs text-gray-500">Product manager</p>
              </div>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Overview</h2>
            <button className="bg-white px-3 py-1 rounded-lg flex items-center gap-1">
              Last 30 days
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`${metric.bgColor} p-3 rounded-full`}>{metric.icon}</div>
                  <span className="text-gray-500">{metric.title}</span>
                </div>
                <div className="flex items-baseline">
                  <h3 className="text-3xl font-bold">{metric.value}</h3>
                  {metric.subValue && <span className="text-gray-500 ml-1">{metric.subValue}</span>}
                </div>
                <p
                  className={`text-sm mt-2 ${metric.decrease ? "text-red-500" : "text-green-500"} flex items-center gap-1`}
                >
                  {metric.decrease ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {metric.decrease || metric.increase}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Project summary */}
          <div className="bg-white p-5 rounded-lg flex-grow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Project summary</h2>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Project <ChevronDown size={16} />
                </button>
                <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Project manager <ChevronDown size={16} />
                </button>
                <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md text-sm">
                  Status <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2">Name</th>
                  <th className="py-2">Project manager</th>
                  <th className="py-2">Due date</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Progress</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-3">{project.name}</td>
                    <td>{project.manager}</td>
                    <td>{project.dueDate}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </td>
                    <td>{getProgressElement(project.status, project.progress)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Overall Progress */}
          <div className="bg-white p-5 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Overall Progress</h2>
              <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md text-sm">
                All <ChevronDown size={16} />
              </button>
            </div>

            {/* Progress gauge */}
            <div className="relative flex justify-center my-8">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-green-500 stroke-current"
                    strokeWidth="8"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="70"
                    transform="rotate(-90 50 50)"
                  ></circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-4xl font-bold">72%</div>
                  <div className="text-gray-500 text-sm">Completed</div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="flex justify-between mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">95</div>
                <div className="text-gray-500 text-sm">Total projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">26</div>
                <div className="text-gray-500 text-sm">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">35</div>
                <div className="text-gray-500 text-sm">Delayed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">35</div>
                <div className="text-gray-500 text-sm">On going</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Today's tasks */}
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Today task</h2>

            <div className="flex gap-4 border-b">
              <button
                className={`pb-2 px-2 relative ${selectedTab === "All" ? "text-blue-500 font-medium" : "text-gray-500"}`}
                onClick={() => setSelectedTab("All")}
              >
                All
                <span className="absolute -right-1 -top-1 bg-gray-200 text-gray-600 rounded-full px-1.5 text-xs">
                  10
                </span>
                {selectedTab === "All" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>}
              </button>

              <button
                className={`pb-2 px-2 ${selectedTab === "Important" ? "text-blue-500 font-medium" : "text-gray-500"}`}
                onClick={() => setSelectedTab("Important")}
              >
                Important
                {selectedTab === "Important" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
                )}
              </button>

              <button
                className={`pb-2 px-2 relative ${selectedTab === "Notes" ? "text-blue-500 font-medium" : "text-gray-500"}`}
                onClick={() => setSelectedTab("Notes")}
              >
                Notes
                <span className="absolute -right-1 -top-1 bg-gray-200 text-gray-600 rounded-full px-1.5 text-xs">
                  05
                </span>
                {selectedTab === "Notes" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>}
              </button>

              <button
                className={`pb-2 px-2 relative ${selectedTab === "Links" ? "text-blue-500 font-medium" : "text-gray-500"}`}
                onClick={() => setSelectedTab("Links")}
              >
                Links
                <span className="absolute -right-1 -top-1 bg-gray-200 text-gray-600 rounded-full px-1.5 text-xs">
                  10
                </span>
                {selectedTab === "Links" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>}
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start">
                  {renderTaskIcon(task.status, task.completed)}
                  <div className="flex-grow">
                    <p>{task.text}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>{task.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Workload */}
          <div className="bg-white p-5 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Projects Workload</h2>
              <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md text-sm">
                Last 3 months <ChevronDown size={16} />
              </button>
            </div>

            <div className="mt-8 flex justify-around">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex flex-col-reverse items-center mb-2">
                    {[10, 8, 7, 2, 4].map((day, idx) => (
                      <div
                        key={idx}
                        className={`w-6 h-6 rounded-full flex items-center justify-center mb-1
                          ${
                            member.days.includes(day.toString())
                              ? "bg-black text-white text-xs"
                              : "border border-gray-300"
                          }`}
                      >
                        {member.days.includes(day.toString()) && day}
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
