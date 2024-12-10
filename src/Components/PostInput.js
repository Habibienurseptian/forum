import React from 'react';
import BtnPost from './Button/BtnPost';

function PostInput({ postContent, handleChange, handlePost }) {
    return (
        <aside>
            <hr className="border-gray-800"></hr>
            <div className="flex">
                <div className="m-4 w-10 py-1">
                    <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                        alt=""
                    />
                </div>
                <form>
                    <div className="flex-1 px-1 pt-2 mt-4">
                        <textarea
                            value={postContent}
                            onChange={handleChange}
                            className="resize-none outline-none bg-transparent text-gray-400 font-medium text-lg md:w-fit w-[300px]"
                            rows="2"
                            cols="50"
                            placeholder="What's happening?"
                        />
                    </div>
                </form>
            </div>
            <div className="flex">
                <div className="w-10"></div>
                <div className="w-64 px-2">
                    <div className="flex items-center">
                        <div className="flex-1 text-center px-1 py-1 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a
                                href="#"
                                className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300"
                            >
                                <svg
                                    className="text-center h-7 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                <BtnPost
                    onClick={handlePost}
                    label="Post"
                    className="mt-5 mr-8 float-right"
                />
                </div>
            </div>
            <hr className="border-gray-800 border-4"></hr>
        </aside>
    );
}

export default PostInput;