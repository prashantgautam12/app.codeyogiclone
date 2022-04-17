import React from 'react'
import {Link} from 'react-router-dom'
function SideBar (){
  return (
    <div className="bg-gray-700 w-60 h-screen flex flex-col justify-center items-center space-y-2">
        <h1 className="text-2xl font-extrabold text-white mr-4">CODE YOGI</h1>

        <Link class="h-10 rounded-md w-40 ml-4 text-white font-bold hover:bg-gray-500" to="/assignment">Assignments</Link>
        <Link class="h-10 rounded-md w-40 ml-4 text-white font-bold hover:bg-gray-500" to="/lectures">Lectures</Link>
        <Link class="h-10 rounded-md w-40 ml-4 text-white font-bold hover:bg-gray-500" to="/quiz">Quiz</Link>
        <Link class="h-10 rounded-md w-40 ml-4 text-white font-bold hover:bg-gray-500" to="/student">Student</Link>
        <div class="grow"></div>
        <Link class="h-10 rounded-md w-40 ml-4 text-white font-bold hover:bg-gray-500" to="/profile">Profile</Link>
        <h1 class="h-10 rounded-md w-40 ml-4 text-white font-bold hover:bg-gray-500">Logout</h1>
        </div>
  );
}
export default SideBar;