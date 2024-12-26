import { JSX } from "react";
import { highlight } from "sugar-high";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"

import Counter from "@/components/counter";

type CodeProps = {
    children: string;
    [key: string]: any;
}

function Code({ children, ...props }: CodeProps){
    let codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML}} {...props} />
}

const components = {
    code: Code,
    Counter
}

type MDXContentProps = JSX.IntrinsicAttributes & MDXRemoteProps & {
    components?: { [key: string]: React.ComponentType<any> };
};

export default function MDXContent(
    props: MDXContentProps
) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {})}}
        />
    )
}