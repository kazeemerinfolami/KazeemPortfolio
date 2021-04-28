// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link, withRouter } from "react-router-dom"

// const Nav = styled.nav`
// width: 100%;
//   padding: 0 5%;
//   // min-height: 9vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: rgb(161, 156, 156);
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const Logo = styled.h1`
//   background-color: rgba(255, 255, 0, 0.589);
//   padding:0 5px;
//   font-weight: bold;
//   font-size: 100%;
//   color: rgb(53, 23, 23);
// `;

// const Menu = styled.ul`
//   list-style: none;
//   display: flex;
//   color:green;
//   background: black;
// //  background-color: blue;
//   li:nth-child(2) {
//     margin: 0px 20px;
//   }

//   @media (max-width: 854px) {
//     display: none;
//   }
// `;

// const Item = styled.li`
// `;

// // const Link = styled.a`
// // padding: 1.5rem;
// //   font-size: large;
// //   font-weight: bold;
// //   font-weight: bold;
// //   font-size: 100%;
// // `;

// const NavIcon = styled.button`
//   background: none;
//   cursor: pointer;
//   border: none;
//   outline: none;

//   @media (min-width: 854px) {
//     display: none;
//   }
// `;

// const Line = styled.span`
//   display: block;
//   border-radius: 50px;
//   width: 25px;
//   height: 3px;
//   margin: 5px;
//   background-color: #963914;
//   transition: width 0.4s ease-in-out;

//   :nth-child(2) {
//     width: ${props => (props.open ? "40%" : "70%")};
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   height: ${props => (props.open ? "100vh" : 0)};
//   width: 96%;
//   background: black;
//   // background: red;
//   backdropFilter: "blur(5px)";
//   transition: height 0.4s ease-in-out;

//   @media (min-width: 854px) {
//     display: none;
//   }
// `;

// const OverlayMenu = styled.ul`
//   list-style: none;
//   margin-top: -30%;
//   text-align: center;
//   position: absolute;
//   //  color:green;
//   //  background: black;
// //  background-color: blue;
//   left: 50%;
//   top: 90%;
//   transform: translate(-50%, -20rem);

//   li {
//     opacity: ${props => (props.open ? 1 : 0)};
//     font-size: 100%;
//     margin: 40px 10px;
//     padding: 5px 20px;
//     transition: opacity 0.4s ease-in-out;
//   }

//   li:nth-child(2) {
//     margin: 50px 0px;
//   }
// `;

// const Header = ({ location, history }) => {
//     const [toggle, toggleNav] = useState(false);
//     const isAuth = (path) => {
//         if (location.pathname === path) {
//             return {
//                 color: "#963914", borderBottom: "3px solid #9e8720", width: "50%", paddingBottom: "4px"
//             }
//         } else {
//             return { color: "" }
//         }
//     }
//     return (
//         <>
//             <Nav>
//                 <Link to="/" ><span className="logoName">Kazeem</span>Portfolio</Link>

//                 <Menu>
//                     <Item>
//                         <Link className="nava" style={isAuth("/")} to="/">
//                             Home
//                         </Link>
//                     </Item>
//                     <Item>
//                         <Link className="nava" style={isAuth("/about")} to="/about">
//                             About
//             </Link>
//                     </Item>
//                     <Item>
//                         <Link className="nava" style={isAuth("/project")} to="/project">
//                             projects
//             </Link>
//                     </Item>
//                     <Item>
//                         <Link className="nava" style={isAuth("/contact")} to="/contact">
//                             contact
//                      </Link>
//                     </Item>
//                 </Menu>
//                 <NavIcon onClick={() => toggleNav(!toggle)}>
//                     <Line open={toggle} />
//                     <Line open={toggle} />
//                     <Line open={toggle} />
//                 </NavIcon>
//             </Nav>
//             <Overlay open={toggle}>
//                 <OverlayMenu open={toggle}>
//                     <Item>
//                         <Link className="nava" style={isAuth("/")} to="/">
//                             Home
//                         </Link>
//                     </Item>
//                     <Item>
//                         <Link className="nava" style={isAuth("/about")} to="/about">
//                             About
//             </Link>
//                     </Item>
//                     <Item>
//                         <Link className="nava" style={isAuth("/project")} to="/project">
//                             projects
//             </Link>
//                     </Item>
//                     <Item>
//                         <Link className="nava" style={isAuth("/contact")} to="/contact">
//                             contact
//                      </Link>
//                     </Item>
//                 </OverlayMenu>
//             </Overlay>
//         </>
//     );
// };

// export default withRouter(Header);