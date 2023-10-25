import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

const Style1 = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};
const Style2 = {
  backgroundColor: "#23242a",
};

function Footer() {
  return (
    <div class="container my-5">
      <footer class="text-white text-center text-lg-start" style={Style2}>
        <div class="container p-4">
          <div class="row mt-4">
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">About company</h5>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>

              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias.
              </p>

              <div class="mt-4">
                <a
                  className="btn btn-outline-light btn-floating m-4"
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faFacebook} beat />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-4"
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faTwitter} beat />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-4"
                  href="#!"
                  role="button"
                >
                  <FontAwesomeIcon icon={faInstagram} beat />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 pb-1">Contact Us</h5>
              <ul class="fa-ul">
                <li class="mb-3">
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                  <span class="ms-2">New York, NY 10012, US</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span class="ms-2">info@example.com</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faPhoneFlip} />
                  </span>
                  <span class="ms-2">+ 01 234 567 88</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-4 mt-5">
                <li class="mb-4">
              <a class="text-white text-underline-hover" href="#">
                Privacy Policy
              </a>
              </li>
              <li class="mb-4">
              <a class="text-white text-underline-hover" href="#">
                Terms of Use
              </a>
              </li>
              <li class="mb-4">
              <a class="text-white text-underline-hover" href="#">
                Advertising
              </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={Style1}>
          © 2023 by FlickFeeds.com,Inc.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
