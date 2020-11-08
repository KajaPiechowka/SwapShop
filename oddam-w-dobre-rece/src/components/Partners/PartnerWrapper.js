import React, { useState } from "react";
import Partners from "./Partners";

const PartnerWrappper = ({ data }) => {
  const [partners, setPartners] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(3);

  //get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = partners.slice(indexOfFirstPost, indexOfLastPost);

  return <Partners partners={currentPosts} />;
};

export default PartnerWrappper;
