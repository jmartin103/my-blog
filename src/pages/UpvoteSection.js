import React, { useState } from 'react';

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvote = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'POST',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div id="upvotes-section">
            <button onClick={() => upvote()}>Add Upvote</button>
            <p>This post has been upvoted {upvotes} times.</p>
        </div>
    )
};

export default UpvoteSection;