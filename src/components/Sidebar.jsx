import React, { useState } from "react"
import { Home, User, Settings, PanelRightClose } from "lucide-react"

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex">
      
      <div className={`${open ? "w-64" : "w-20"} h-screen bg-gray-800 text-white p-5 shrink-0`}>
        <button 
          onClick={() => setOpen(!open)} 
          className="mb-5 bg-gray-700 p-2 rounded w-full"
        >
          <PanelRightClose size={20} />
        </button>

        <ul>
          <li className="flex items-center gap-3 mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Home size={20} />
            {open && <span>Home</span>}
          </li>

          <li className="flex items-center gap-3 mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <User size={20} />
            {open && <span>Profile</span>}
          </li>

          <li className="flex items-center gap-3 mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Settings size={20} />
            {open && <span>Settings</span>}
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Sidebar