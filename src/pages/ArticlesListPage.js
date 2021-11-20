import React from 'react';
import ArticlesList from './ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => {
    return (
        <ArticlesList articles={articleContent} />
    )
}

export default ArticlesListPage;