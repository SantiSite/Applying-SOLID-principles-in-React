import { FC } from "react";

// Interface Segregation Principle: No es necesario que los componentes contenga métodos y/o propiedades que no sean necesarios.
// El componente PostTitle únicamente necesita el title del post no el post completo.
// El componente PostDate únicamente necesita el createdAt del post no el post completo.

type PostType = {
    title: string;
    author: {
        name: string;
        age: number;
    };
    createdAt: Date
};

const Post = ({ post }: { post: PostType }) => {
    return (
        <div>
            <PostTitle title={post.title} />
            <span>author: {post.author.name}</span>
            <PostDate createdAt={post.createdAt} />
        </div>
    );
};

type PostTitleType = {
    title: string;
};

const PostTitle: FC<PostTitleType> = ({ title }) => {
    return <h1>{title}</h1>;
};

type PostDateType = {
    createdAt: Date;
};

const PostDate: FC<PostDateType> = ({ createdAt }) => {
    return <time>{createdAt.toString()}</time>;
};

export default Post;
