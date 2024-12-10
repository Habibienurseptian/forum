import React from 'react';
import Like from './Button/Like'
import CommentButton from "./Button/Comment";
import ShareButton from "./Button/Share";

function Post({ post, formatTime, currentTime, toggleCommentInput, handleShareClick, handleLike }) {
    
    return (
        <article key={post.id} className="hover:bg-gray-800 transition duration-350 ease-in-out">
            <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="inline-block h-10 w-10 rounded-full"
                                src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-base leading-6 font-bold text-white mb-2">
                                Miyuzaki San
                                <span className="text-sm px-1 leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                    @san_miyuzaki · {formatTime(currentTime)}
                                </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="pl-16 ml-1 mr-5">
                <p className="text-sm w-auto font-normal text-white flex-shrink break-normal">
                    {post.content}
                </p>
                <div className="flex-shrink pr-6 pt-3">
                    <div className="flex items-center py-4 gap-20">
                        <CommentButton
                            post={post}
                            toggleCommentInput={toggleCommentInput}
                        />
                        <Like 
                            post={post}
                            handleLike={handleLike}
                        />
                        <ShareButton onShareClick={handleShareClick} />
                    </div>
                </div>
            </div>
            <hr className="border-gray-800"></hr>
        </article>
    );
}

export default Post;
