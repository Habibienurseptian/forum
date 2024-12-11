import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Comment from "./Comment";
import CommentInput from "./Element/CommentInput";
import PostInput from "./Element/PostInput";
import Post from "./Post";
import Header from "./Header";

function Main (){
    const textbox = useRef(null);
    const [posts, setPosts] = useState([]); 
    const [postContent, setPostContent] = useState("");
    const [postReplay, setPostReplay] = useState("");
    const [showCommentInput, setShowCommentInput] = useState({});
    
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



    return (
        <div>
            <Header
                title="Home"
                iconLink="#"
            />
            <PostInput
                postContent={postContent}
                handleChange={handleChange}
                handlePost={handlePost}
            />
            <ul className="list-none">
                {posts.map((post) => (
                <li>
                    <Post
                        key={post.id}
                        post={post}
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