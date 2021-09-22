// DEPENDENCIES
import React from "react";
import { Helmet } from "react-helmet";

// COMPONENTS
import Navbar from "../Navbar";
import Footer from "../Footer";

// ASSETS
import thumbnail from "./assets/thumbnail.png"

const seo = {
    siteTitle: "Murch",
    siteDescription: "Murch is a personalized e-commerce platform designed for Content Creators who want to sell merchandise without the pains of managing a business. It's a place where you, can sell your story.",
    siteThumbnail: thumbnail
}

const Layout = ({ children }) => (
    <>
      <Helmet
        title={seo.siteTitle}
        titleTemplate={`%s`}
        meta={[
          {
            name: `description`,
            content: seo.siteDescription,
          },
          {
            property: `og:title`,
            content: seo.siteTitle,
          },
          {
            property: `og:description`,
            content: seo.siteDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: "murch.shop",
          },
          {
            name: `twitter:title`,
            content: seo.siteTitle,
          },
          {
            name: `twitter:description`,
            content: seo.siteDescription,
          },
          {
            name: `og:url`,
            content: `https://murch.shop/`,
          },
          // Once thumbnail is available, import image and use here
          {
            name: `og:image`,
            content: thumbnail,
          },
          {
            name: `twitter:image`,
            content: thumbnail
          }
        ]}
      />
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
);

export default Layout;