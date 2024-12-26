"use client"

import React, { useEffect, useRef } from "react";

const Comments = () => {
    const commentBox = useRef<HTMLDivElement|null>(null);

    useEffect(()=> {
        if (commentBox.current) {
            const script = document.createElement("script");
            script.setAttribute("src", "https://utteranc.es/client.js");
            script.setAttribute("crossorigin", "anonymous");
            script.async = true;
            script.setAttribute("repo", "gitkarasune/utterance-comments");
            script.setAttribute("issue-term", "url");
            script.setAttribute("theme", "github-dark");
            commentBox.current.appendChild(script);
        }
    },[]);

    return (
        <div className="w-full">
            <div ref={commentBox} />
        </div>
    );       
}

export default Comments;

