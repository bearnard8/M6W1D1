import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = props => {

  const endpoint = "http://localhost:3001/api/authors";
  let data = [];

  async function fetchAuthors () {
    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const result = await response.json();
        data = result;
        console.log(data);
      } else {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.response = response;
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Row>
      {posts.map((post, i) => (
        <Col
          key={`item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
