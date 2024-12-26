import { JSX } from "react";
import { highlight } from "sugar-high";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"

import Counter from "@/components/counter";

type CodeProps = {
    children: string;
    [key: string]: unknown;
}

function Code({ children, ...props }: CodeProps): JSX.Element{
    let codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML}} {...props} />;
}

const components = {
    code: Code,
    Counter
}

interface MDXContentProps extends MDXRemoteProps {
    components?: { [key: string]: React.ComponentType<any> };
};

export default function MDXContent(
    props: MDXContentProps
): JSX.Element {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {})}}
        />
    )
}