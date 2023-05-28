import React from "react";

const postContent = React.createContext({});

export default PostsContext;

export const PostsProvider = ({children}) => {

    return <PostsContext.Provider>{children}</PostsContext.Provider>

}