import React from "react";
import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";

type Props = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
      };
      body: any;
      slug: string;
    };
  };
};

const BlogPost: React.FC<Props> = ({
  data: {
    mdx: {
      body,
      frontmatter: { title },
    },
  },
}) => {
  return (
    <div>
      <h1>{title}</h1>

      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      slug
    }
  }
`;

export default BlogPost;
