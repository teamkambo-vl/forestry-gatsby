import { graphql, Link } from "gatsby";
import React from "react";

type Props = {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          title: string;
        };
        id: string;
        slug: string;
      }[];
    };
  };
};

const HomePage: React.FC<Props> = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <div>
      <h1>Home</h1>

      {nodes.map((item, index) => (
        <li key={index}>
          <Link to={`/blog/${item.slug}`}>{item.frontmatter.title}</Link>
        </li>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default HomePage;
