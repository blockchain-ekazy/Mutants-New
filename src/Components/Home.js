import React from "react";
import "./Home.css";
import $ from 'jquery'; 

import Logo from "./Imgs/Logo.png";
import WorkImg from "./Imgs/Wimg.png";
import TeamI from "./Imgs/Teamimg.png";
import RD from "./Imgs/RD.PNG";
import TEEL from "./Imgs/Group.png";


import ImgA from "./Imgs/1.webp";
import ImgB from "./Imgs/2.webp";
import ImgC from "./Imgs/3.webp";

import RDA from "./Imgs/RD1.png";
import RDB from "./Imgs/RD2.png";
import RDC from "./Imgs/RD3.png";
import RDD from "./Imgs/RD4.png";
import RDE from "./Imgs/RD5.png";
import RDF from "./Imgs/RD6.png";

export default function () {
  return (

 
  


    <div>
      <div className="container-fluid home ">
        <div className="container-fluid ">
          <nav class="navbar container navbar-expand-lg navbar-dark ">
            <div class="container-fluid">
              <a class="navbar-brand d-block " href="#">
                <img
                  src={Logo}
                  className="LOGOImg"
                  width="100%"
                  height=""
                  alt=""
                ></img>
              </a>
              <button
                className="navbar-toggler  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-label="Toggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse  navbar-collapse pl-5"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav nav mb-2 mb-lg-0  ">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      HOME
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#About">
                      ABOUT
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#HTW">
                      HOW THIS WORKS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Rd">
                      Road Map
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#Team">
                      FAQS
                    </a>
                  </li>
                </ul>
                <form class=" btnns">
                  <div class="social-buttons text-center">
                    <button class="neo-button">
                      <i class="fa fa-facebook fa-2x"></i>
                    </button>
                    <button class="neo-button">
                      <i class="buttons fab fa-discord  text-white"></i>
                    </button>
                    <button class="neo-button">
                      <i class="fab fa-medium-m  text-white"></i>
                    </button>
                    <button class="neo-button">
                      <i class="fa fa-twitter "></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div className="  imgb">
          <div className="overlay d-flex flex-column justify-content-end">
            <div className="text-center">
              <h2 className="text-white font-weight-light MSB">
                Mutant Soldiers By
              </h2>
              <h1 className=" text-uppercase centered text-white h1 TEE">
                The <span className="Tclr ">Endless</span> Expanse
              </h1>
            </div>
            <div className="text-center ">
              <br></br>
              <button
                type="button"
                class="Wbtn font-weight-bold py-3 btn btn-lg px-5 mb-5"
              >
                CONNECT YOUR WALLET
              </button>
            </div>
          </div>
        </div>
      </div>
      <a id="About"></a>
      <div className="container-fluid  Gateway">
        <div className="container FF">
          <div className="row FFR">
            <div className="col-12 col-md-6 ">
              <h1 className="MHA">
                Your Gateway to
                <br /> Financial Freedom
              </h1>
              <h3 className="pb-5 pt-4 MHA">
                10 000 NFT Collection - 0.08 ETH
              </h3>
              <p>
                After years of horrifying experiments, the Mutant Soldiers were
                formed. Grotesque, mysterious and terrifyingly powerful, these
                mutants are not just weapons of war anymore - they’re humanity’s
                next stage of evolution… or so it would seem.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <p>
                Our first NFT collection is the Mutant Soldiers. These mutated
                super soldiers were born in a time referred to as "The Endless
                Expanse", and were the result of biological, robotic, nanotech,
                and radioactive experiments. An evolving world requires an
                evolving species to not just keep up but also thrive!
                <br />
                <br /> But there's more. A second NFT collection will soon be
                revealed, so stay tuned!
                <br />
                <br /> By being part of these NFTs, you first get access for
                free to TradersSynergy, your gateway to financial freedom.
                TradersSynergy is an elite trading group that focuses on
                cryptocurrency to take your investment to the next level. Find
                more information below, or on our website.
              </p>
            </div>
          </div>

          <div className="row ">
            <div className="col-12 text-center  ">
              <button
                type="button"
                class="Wbtn font-weight-bold mt-5  btn btn-lg px-5 py-3 mb-5"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid Collectionbg">
        <div className="container ">
          <div className="row ">
            <div className="col-12 text-center">
              <h1 className="text-center text-white COLH pb-3 pt-5">
                Collection One
              </h1>
              <p>
                Based on your ownership of NFTs, you will have higher levels of
                benefits within this investment structure. When you get in on
                our first collection, you will be able to get in on the first
                round of fundraising that invests eighty percent of the funds
                into a hedge fun system. Holders will earn a percentage of the
                benefits, which will be air dropped directly into your account.
              </p>
            </div>
          </div>
        </div>

        <div className="container ColImgs">
          <div className="row ">
            <div className="col-12 col-md-4 text-center ">
              <div className="colb mb-3">
                <img src={ImgA} className="  ImgA"></img>
                <h6 className="pt-4">
                  Holders of 1 NFT receive{" "}
                  <span className="pinktxt"> 0.005 percent of benefits</span>.
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-4  text-center">
              <div className="colb mb-3">
                <img src={ImgB} className=" ImgB"></img>
                <h6 className="pt-4">
                  Holders of 5 NFTs receive{" "}
                  <span className="pinktxt"> 0.030 percent of benefits</span>.
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-4  text-center ">
              <div className="colb mb-3">
                <img src={ImgC} className=" ImgC"></img>
                <h6 className="pt-4">
                  Holders of 10 NFT receive{" "}
                  <span className="pinktxt">0.065 percent of benefits</span>.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row py-4 TEERR">
            <div className="col-12 col-md-8">
              <p className="font-weight-bold">
                Example: If in 2 weeks we earn $50 000 total, if you own:
                <br></br>1 NFT: 50 000 x 0.005 % = $2.5<br></br>5 NFT: 50 000 x
                0.030 % = $15<br></br>
                10 NFT: 50 000 x 0.065 % = $32.5<br></br>
                <span className="pinktxt">
                  We are giving back more than 50% of our income back to
                  holders.
                </span>
              </p>
            </div>
            <div className="col-8 col-md-4 TEELImg  d-flex flex-row-reverse">
              <img src={TEEL} className="TEELImg"></img>
            </div>
          </div>
        </div>
      </div>


<a id="HTW"></a>
      <div className="container-fluid p-3 WorkBg ">
        <div className="container ">
          <div className="row p-md-5 py-5 TEER">
            <div className="col-12 col-md-6 ">
              <img src={WorkImg} className="w-100 d-none d-md-block "></img>
            </div>
            <div className="col-12 col-md-6 text-white HTWC">
              <h1 className="text-white HTW">How This Works:</h1>
              <p>
                A personalized dashboard will be created for you to demonstrate
                all information on your investments. Every week and each month,
                profits will be directly viewable in your dashboard. Both
                holders and non-holders will be able to view all our data, as we
                will be completely transparent.<br></br>
                <br></br>
                <li>Tokens will be air dropped on Sundays, every two weeks.</li>
                <li className="pb-4">
                  When a token is sold between those two weeks, the new owner
                  will not be able to receive funds until they wait for the
                  following two-week cycle.
                </li>
                But the Mutant Soldiers aren’t the final frontier of our
                project. Further information will be added as the project
                progresses. Stay Tuned…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------Mobile View Rd------------------------------------------ */}

      <div className="conainer RDMV d-lg-none d-block">
        <h1 className="pt-5 text-center text-white pb-5">Roadmap</h1>

        <div className=" pl-5 pb-5 ">
          <h6 className=" text-white font-weight-bold">
            <img src={RDA} className="pb-3 RMIA"></img>
            <br></br>
            The Launch
          </h6>
          <li className=" pt-3 pl-3 text-white">
            Our website and the Mutant Soldiers NFT collection goes live.
          </li>
          <li className=" pt-3 pl-3 text-white">
            Our website and the Mutant Soldiers NFT collection goes live.
          </li>
        </div>

        <div className=" pl-5  pb-5 ">
          <h6 className=" text-white font-weight-bold">
            <img src={RDB} className="pb-3 RMIA"></img>
            <br></br>
            Gain Access to Traders Synergy
          </h6>
          <li className=" pt-3 pl-3 text-white pr-4">
            Holders gain access to our exclusive group of crypto and financial
            traders, TradersSynergy.{" "}
          </li>
        </div>

        <div className=" pl-5  pb-5 pr-4">
          <h6 className=" text-white font-weight-bold">
            <img src={RDC} className="pb-3 RMIA"></img>
            <br></br>
            The Next Level
          </h6>
          <li className=" pt-3 pl-3 text-white">
            Endless DAO releases with 80 percent of initial sales plus 20
            percent royalties added to treasury.{" "}
          </li>
          <li className=" pt-3 pl-3 text-white">
            Holders are able to vote on the continuing development of the
            algorithms and financial updates as well as the expansion of the
            ecosystem.{" "}
          </li>
          <li className=" pt-3 pl-3 text-white">
            Profits are directly airdropped into the holder’s wallet.
          </li>
        </div>

        <div className=" pl-5  pb-5 ">
          <h6 className=" text-white font-weight-bold">
            <img src={RDD} className="pb-3 RMIA"></img>
            <br></br>
            Time to Vote
          </h6>
          <li className=" pt-3 pl-3 text-white">Merchandise collection. </li>
          <li className=" pt-3 pl-3 text-white">
            First DAO voting takes place..{" "}
          </li>
        </div>

        <div className=" pl-5  pb-5 pr-4 ">
          <h6 className=" text-white font-weight-bold">
            <img src={RDE} className="pb-3 RMIA"></img>
            <br></br>
            Next Reveal
          </h6>
          <li className=" pt-3 pl-3 text-white">
            Our 2nd NFT collection is revealed.
          </li>
          <li className=" pt-3 pl-3 text-white">
            Whitelist for the most involved Mutant Soldiers holders.
          </li>
          <li className=" pt-3 pl-3 text-white">
            The Endless Expanse is taken to the metaverse, putting charts,
            technical analysis directly inside the metaverse. Invitation of
            external traders, financial advisors, and discussion of investments
            opportunities from all domains{" "}
          </li>
          <li className=" pt-3 pl-3 text-white">
            Both NFT sets have a metaverse space{" "}
          </li>
        </div>

        <div className=" pl-5  pb-5  ">
          <h6 className=" text-white font-weight-bold">
            <img src={RDF} className="pb-3 RMIA"></img>
            <br></br>
            Evolution{" "}
          </h6>
          <li className=" pt-3 pl-3 text-white">
            Internal economy takes shape.{" "}
          </li>
        </div>
      </div>

      {/* ------------------------------------------------------------------Mobile View Rd------------------------------------------ */}
<a id="Rd"></a>



      <div className="containet-fluid Rd d-none  d-lg-block">
        <div className="container ">
          <h1 className="pt-5 text-center text-white ">Roadmap</h1>

          <div className="row py-5">
            <div className="col-4">
              <h6 className=" RDB font-weight-bold text-white">
                Gain Access to Traders Synergy
              </h6>
              <li className=" RDBP text-white ">
                Holders gain access to our exclusive group of crypto and
                financial traders, TradersSynergy.
              </li>

              <div className="RDD">
                <h6 className=" RDD pt-3 pl-3 text-white font-weight-bold">
                  Time to Vote
                </h6>
                <li className=" RDDP pt-1 pl-3 text-white">
                  Merchandise collection.{" "}
                </li>
                <li className=" pt-1 pl-1 text-white">
                  First DAO voting takes place..{" "}
                </li>
              </div>

              <div className="RDD">
                <h6 className=" RDD pt-3 pl-3 text-white font-weight-bold">
                  Evolution{" "}
                </h6>
                <li className=" RDDP pt-1 pl-3 text-white">
                  Internal economy takes shape.{" "}
                </li>
              </div>
            </div>

            <div className="col-3">
              <img src={RD} className="RDIMG"></img>
            </div>

            <div className="col-5">
              <div className="RDA">
                <h6 className=" pt-3 pl-3 text-white font-weight-bold">
                  The Launch
                </h6>
                <li className=" pt-3 pl-3 text-white">
                  Our website and the Mutant Soldiers NFT collection goes live.
                </li>
                <li className=" pt-3 pl-3 text-white">
                  Our website and the Mutant Soldiers NFT collection goes live.
                </li>
              </div>

              <div className="RDC">
                <h6 className=" pt-3 pl-3 font-weight-bold text-white">
                  The Next Level
                </h6>
                <li className=" pt-1 pl-3 text-white">
                  Endless DAO releases with 80 percent of initial sales plus 20
                  percent royalties added to treasury.
                </li>
                <li className=" pt-1 pl-3 text-white">
                  Holders are able to vote on the continuing development of the
                  algorithms and financial updates as well as the expansion of
                  the ecosystem.
                </li>
                <li className=" pt-1 pl-3 text-white">
                  Profits are directly airdropped into the holder’s wallet.
                </li>
              </div>

              <div className="RDE">
                <h6 className=" pt-3 pl-3 font-weight-bold text-white">
                  Next Reveal
                </h6>
                <li className=" pt-1 pl-3 text-white">
                  Our 2nd NFT collection is revealed.
                </li>
                <li className=" pt-1 pl-3 text-white">
                  Whitelist for the most involved Mutant Soldiers holders.
                </li>
                <li className=" pt-1 pl-3 text-white">
                  The Endless Expanse is taken to the metaverse, putting charts,
                  technical analysis directly inside the metaverse. Invitation
                  of external traders, financial advisors, and discussion of
                  investments opportunities from all domains{" "}
                </li>

                <li className=" pt-1 pl-3 text-white">
                  Both NFT sets have a metaverse space{" "}
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div
        id="carouselExampleControls"
        class="carousel slide SLIM d-block d-sm-none"
        data-ride="carousel"
      >
        <h1 className="text-center pb-3 h4 text-white"> Members</h1>

        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <img class="d-block " src={TeamI} alt="First slide"></img> */}
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>
          </div>

          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>
          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>
          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>
          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>

          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>

          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>

          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>

          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>

          <div class="carousel-item">
            <img src={TeamI} className="d-block ImgT"></img>
            <h6 className="pt-2 font-weight-bold text-center text-white">
              Simon
            </h6>{" "}
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      {/* <div class="container SLIDERM  d-lg-none d-sm-block ">
        <h1 className="text-white text-center py-4 h4 font-weight-bold">
          Members
        </h1>

        <div class="card">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row h-100 p-3 align-items-center">
                  <div class="col-lg-6 content">
                    <img src={TeamI} className=" ImgT"></img>
                    <h6 className="pt-2 font-weight-bold text-center text-white">
                      Simon
                    </h6>
                  </div>
                </div>
              </div>

              

              <div class="carousel-item">
                <div class="row h-100 p-3 align-items-center">
                  <div class="col-lg-6   d-flex justify-content-center align-items-center title"></div>
                  <div class="col-lg-6  ">
                    <img src={TeamI} className=" ImgT"></img>
                    <h6 className="pt-2 font-weight-bold text-center text-white">
                      Simon
                    </h6>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row h-100 p-3 align-items-center">
                  <div class="col-lg-6 d-flex justify-content-center align-items-center title"></div>
                  <div class="col-lg-6">
                    <img src={TeamI} className=" ImgT"></img>
                    <h6 className="pt-2 font-weight-bold text-center text-white">
                      Simon
                    </h6>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row h-100 p-3 align-items-center">
                  <div class="col-lg-6 d-flex justify-content-center align-items-center title"></div>
                  <div class="col-lg-6">
                    <img src={RDA} className=" ImgT"></img>
                    <h6 className="pt-2 font-weight-bold text-center text-white">
                      Simon
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
          </div>
        </div>
      </div> */}

      <div className="container-fluid p-5 TeamDiv d-sm-block d-none">
        <div className="container ">
          <h1 className="text-center text-white pt-5">Team</h1>
          <div className="row py-4 ">
            <div className="col-2  ">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
          </div>

          <div className="row py-4 ">
            <div className="col-1"></div>

            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row py-4 ">
            <div className="col-2"></div>

            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>
            <div className="col-2">
              <img src={TeamI} className=" ImgT"></img>
              <h6 className="pt-2 font-weight-bold text-center text-white">
                Simon <br></br> <span className="PT">Owner</span>
              </h6>
            </div>

            <div className="col-2"></div>
          </div>
        </div>
      </div>


<a id="Team"></a>
      <div className="conatiner-fluid Faq">
        <div className="container">
          <div className="row FAQq">
            <div className="col-12 col-md-6">
              <h1 className=" FAQH pt-5 font-weight-bold text-white">
                Frequetly Asked Question{" "}
              </h1>
            </div>

            <div class=" col-12 col-md-6">
              <div
                class="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        When does the first collection launch?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div class="panel-body ">
                      <p>
                        The Mutant Soldiers collection releases on (date). A
                        whitelist pre-sale will take place on (date).
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        When will the second collection launch?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="panel-body">
                      <p>
                        The TBA second collection is currently scheduled for
                        (Q?) 2022{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How do I access the Whitelist for the first collection?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="panel-body">
                      <p>
                        Follow our Twitter & Instagram, and join our Discord for
                        options to get onto the whitelist! You can get on the
                        whitelist through Discord activity or through social
                        media & Discord giveaways
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingFour">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is the game free-to-play?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                  >
                    <div class="panel-body">
                      <p>
                        The game itself is free-to-play, but you need an NFT
                        from The Endless Expanse collections.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingFive">
                    <h4 class="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How much will the NFT cost?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFive"
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div class="panel-body ">
                      <p>
                        The whitelist sale price is 0.07. The public sale price
                        is 0.08 ETH.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid Footer">
        <div className="container text-center py-2 text-white   ">
          <hr className="text-white bg-white"></hr>

          <p>
            <div className="row ">
              <div className="col-6 FC ">
                <i className="fab fa-discord  Footer px-1 float-left"></i>{" "}
                <i className=" px-1 Footer fab fa-twitter float-left"></i>{" "}
                <i class="fab fa-medium-m  Footer px-1 float-left"></i>
                <i class="fa fa-facebook Footer px-1 float-left "></i>
              </div>
              <div className="col-6">
                <span className="px-1 Footer float-right">
                  © 2022, The Endless Expanse
                </span>{" "}
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
