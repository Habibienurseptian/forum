import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import PostInput from "./PostInput";
import Post from "./Post";


function Main (){
    const textbox = useRef(null);
    const [posts, setPosts] = useState([]); 
    const [postContent, setPostContent] = useState("");
    const [postReplay, setPostReplay] = useState("");
    const [showCommentInput, setShowCommentInput] = useState({});
    const [currentTime, setCurrentTime] = useState(new Date());
    
    function handleLike(postId) {
        setPosts((prevPosts) =>
            (prevPosts || []).map((post) =>
                post && post.id === postId
                    ? {
                        ...post,
                        likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
                        likedByUser: !post.likedByUser
                    }
                    : post
            )
        );
    }
    

    const handleShareClick = () => {
        alert(`Post has been shared!`);
    };

    function adjustHeight() {
        if (textbox.current) {
            textbox.current.style.height = "inherit";
            textbox.current.style.height = `${textbox.current.scrollHeight}px`;
        }
    };

    useLayoutEffect(adjustHeight, [postContent]);
    useLayoutEffect(adjustHeight, [postReplay]);

    function handleChange(e) {
        setPostContent(e.target.value);
        adjustHeight();
    };


    function handleChangeReplay(e) {
        setPostReplay(e.target.value);
        adjustHeight();
    };

    function handlePost() {
        if (postContent.trim()) {
            setPosts((prevPosts) => [
                { id: Date.now(),
                    content: postContent,
                    likes: 0,
                    komen: 0,
                    comments: [],
                 },
                ...prevPosts,
            ]);
            setPostContent(""); 
        }
    };

    function toggleCommentInput(postId) {
        setShowCommentInput((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    function handleAddComment(postId, comment) {
        if (comment.trim()) {
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, komen:post.komen + 1, comments: [...post.comments, comment] }
                        : post
                )
            );
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function formatTime(time) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - time) / 1000);

        if (diffInSeconds < 10) return "Just Now";
        if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return `${diffInHours} hours ago`;
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} days ago`;
    };
    


    return (
        <div>
            <div className="flex sticky top-0 backdrop-blur-md">
                <div className="flex-1 mx-2">
                    <h2 className="px-4 py-2 text-xl font-semibold text-white">Home</h2>
                </div>
                <div className="flex-1 px-4 py-2 mx-2">
                    <a href="" className=" text-2xl font-medium rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                        <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <g>
                                <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <PostInput
                postContent={postContent}
                handleChange={handleChange}
                handlePost={handlePost}
            />
            <ul className="list-none">
                {posts.map((post) => (
                <li>
                    <Post
                        post={post}
                        formatTime={formatTime}
                        currentTime={currentTime}
                        handleLike={handleLike}
                        toggleCommentInput={toggleCommentInput}
                        handleShareClick={handleShareClick}
                    />
                    <CommentInput
                        showCommentInput={showCommentInput}
                        post={post}
                        handleChangeReplay={handleChangeReplay}
                        handleAddComment={handleAddComment}
                    />
                    <div>
                    {post.comments.map((comment, index) => (
                        <Comment
                            key={index}
                            comment={comment}
                            index={index}
                            formatTime={formatTime}
                            currentTime={currentTime}
                        />
                    ))}
                    </div>
                    <div className="flex justify-center border-gray-800 border cursor-pointer rounded-full py-2 text-white m-2  hover:bg-blue-500">Show Comments</div>
                    <hr className="border-gray-800 border-4"></hr>
                </li>
                ))}
            </ul>
        </div>    
    )
  };

export default Main;