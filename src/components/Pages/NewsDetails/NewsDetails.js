import React, { useState } from "react";
import "./NewsDetails.css";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";
import {
  FaFacebookMessenger,
  FaTwitter,
  FaLinkedinIn,
  FaPrint,
  FaClock,
  FaFacebookF,
  FaPinterestP,
  FaUser,
} from "react-icons/fa";
import NewsBox from "../../Home/NewsBox/NewsBox";
import PaperNews from "../../Home/NewsBox/PaperNews";

const NewsDetails = () => {
  const [allNews, setAllNews] = useState(allNewsData);

  const { key } = useParams();
  const newsInfo = allNews.find((pd) => pd.key == key);
  const headNews = allNews.slice(0, 12);
  return (
    <Container className="mt-4 mb-5">
      <Row>
        <div className="col-8 p-0 ">
          <p className="font-weight-bold p-1 text-secondary">
            প্রচ্ছদ <span className="ml-2 mr-2"> >> </span>
            <span className="text-primary"> {newsInfo.title}</span>{" "}
            <span className="ml-2 mr-2"> >> </span> {newsInfo.newsTitle}
          </p>
          <div class="card border-0 mt-4">
            <div class="card-header bg-transparent p-2">
              {" "}
              <h4 class="card-title text-dark font-weight-bold">
                {newsInfo.newsTitle}
              </h4>
              <div class="text-light d-flex pt-2 pb-2">
                <div className=" text-secondary">
                  <p className="d-flex align-items-center m-0">
                    <small className="">
                      {" "}
                      <FaUser className="mr-1" /> অনলাইন ডেস্ক{" "}
                    </small>
                  </p>

                  <p className="d-flex align-items-center m-0">
                    <small className="">
                      {" "}
                      <FaClock className="mr-1" />
                      ২১ ফেব্রুয়ারি ২০২১ ২২ ফেব্রুয়ারি ২০২১, ০৩:৩৭ পিএম | অনলাইন
                      সংস্করণ
                    </small>
                  </p>
                </div>
                <div className="ml-auto d-flex align-items-center">
                  <div className="border-right text-dark pr-2 mr-2">
                    <span className="d-block d-flex justify-content-center font-weight-bold">
                      {" "}
                      20{" "}
                    </span>
                    <small className=""> Shares</small>
                  </div>
                  <div className="d-flex justify-content-center align-items-center social-media facebook-icon">
                    <FaFacebookF className="social-icon" />{" "}
                  </div>
                  <div className="d-flex justify-content-center align-items-center social-media messenger-icon">
                    {" "}
                    <FaFacebookMessenger className="social-icon" />{" "}
                  </div>
                  <div className="d-flex justify-content-center align-items-center social-media twitter-icon">
                    <FaTwitter className="social-icon" />{" "}
                  </div>
                  <div className="d-flex justify-content-center align-items-center social-media pinterest-icon">
                    <FaPinterestP className="social-icon " />
                  </div>
                  <div className="d-flex justify-content-center align-items-center social-media  linkedin-icon">
                    <FaLinkedinIn className="social-icon" />{" "}
                  </div>
                  <div className="d-flex justify-content-center align-items-center social-media  print-icon">
                    {" "}
                    <FaPrint className="social-icon" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <img
                src={newsInfo.images}
                className="card-img-top rounded"
                alt=""
              />
              <p class="card-text mt-5 mb-4">{newsInfo.description}</p>
            </div>
            <div class="card-footer border-0 bg-transparent">
              <div className="text-light d-flex align-items-center">
                <div className="border-right text-dark pr-2 mr-2">
                  <span className="d-block d-flex justify-content-center font-weight-bold">
                    {" "}
                    20{" "}
                  </span>
                  <small className=""> Shares</small>
                </div>
                <div className="d-flex justify-content-center align-items-center social-media facebook-icon">
                  <FaFacebookF className="social-icon" />{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center social-media messenger-icon">
                  {" "}
                  <FaFacebookMessenger className="social-icon" />{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center social-media twitter-icon">
                  <FaTwitter className="social-icon" />{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center social-media pinterest-icon">
                  <FaPinterestP className="social-icon " />
                </div>
                <div className="d-flex justify-content-center align-items-center social-media  linkedin-icon">
                  <FaLinkedinIn className="social-icon" />{" "}
                </div>
                <div className="d-flex justify-content-center align-items-center social-media  print-icon">
                  {" "}
                  <FaPrint className="social-icon" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-md-4 col-sm-12 mt-5 pt-5">
          <div className="ml-3">
            <NewsBox />
          </div>
          <div className="ml-3">
            <PaperNews />
          </div>
        </div>
      </Row>
      <Row className="">
        <div className="col-8 p-0">
          <h6 className="border-bottom font-weight-bold text-dark border-danger mb-2 pb-2">
            আরও খবর
          </h6>
          <Row className="">
            {headNews.map((newsItem, index) => (
              <div key={index} className="col-4 p-">
                <Link
                  to={"/" + newsItem.key}
                  className="text-decoration-none text-dark"
                >
                  <div className="card border-0 mb-3">
                    <img
                      src={newsItem.images}
                      className="card-img-top rounded p-1"
                      alt=""
                    />
                    <div className="card-body p-1">
                      <h6 className="card-text font-size-small font-weight-bold ">
                        {newsItem.newsTitle}
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default NewsDetails;
