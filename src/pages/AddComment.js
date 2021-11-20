import React, { useState } from 'react';

const AddComment = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    const addNewComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'POST',
            body: JSON.stringify({ username: username, comment: comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setComment('');
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={comment} onChange={(e) => setComment(e.target.value)} />
            </label>
            <button onClick={() => addNewComment()}>Add Comment</button>
        </div>
    )
}

export default AddComment;