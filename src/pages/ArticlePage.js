import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import { Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import CommentList from './CommentList';
import UpvoteSection from './UpvoteSection';
import AddComment from './AddComment';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) { return (<NotFoundPage />)}

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            {article.content.map((paragraph, key) => 
                <p key={key}>{paragraph}</p>)
            }
            <CommentList comments={articleInfo.comments} />
            <AddComment articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles</h3>
            {otherArticles.map((article, key) => 
                <Link key={key} to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            )}
        </>
    );
};

export default ArticlePage;