import {
  LayoutDashboard,
  Upload,
  FileText,
  LogOut,
  Users,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  // GET USER
  const user = JSON.parse(
    localStorage.getItem("user")
  );


  // LOGOUT
  const logoutHandler = () => {

    localStorage.removeItem(
      "resumeData"
    );

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");

  };


  return (
    <div className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-900 p-6 flex flex-col justify-between">

      <div>

        <h1 className="text-3xl font-bold mb-12">
          ResumeIQ AI
        </h1>


        <div className="space-y-3">

          {/* DASHBOARD */}

          <Link
            to={
              user?.role === "Recruiter"
              ? "/recruiter-dashboard"
              : "/dashboard"
            }
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-900 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>


          {/* CANDIDATE ONLY LINKS */}

          {
            user?.role === "Candidate" && (
              <>

                <Link
                  to="/upload"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-900 transition"
                >
                  <Upload size={20} />
                  Upload Resume
                </Link>


                <Link
                  to="/analysis"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-900 transition"
                >
                  <FileText size={20} />
                  ATS Analysis
                </Link>

              </>
            )
          }


          {/* RECRUITER ONLY */}

          {
  user?.role === "Recruiter" && (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl ">

    

    </div>
  )
}

        </div>

      </div>


      {/* LOGOUT */}

      <button
        onClick={logoutHandler}
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
      >
        <LogOut size={20} />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;