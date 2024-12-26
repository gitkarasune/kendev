import { JSX } from "react";
import { highlight } from "sugar-high";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"

import Counter from "@/components/counter";

type CodeProps = {
    children: string;
    [key: string]: unknown; // changed to unknown to avoid using any
}

function Code({ children, ...props }: CodeProps): JSX.Element{
    const codeHTML = highlight(children); // used const here as it is never reassigned
    return <code dangerouslySetInnerHTML={{ __html: codeHTML}} {...props} />;
}

const components = {
    code: Code,
    Counter
}

interface MDXContentProps extends MDXRemoteProps {
    components?: { [key: string]: React.ComponentType<unknown> };
    // use unknown instead of any
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