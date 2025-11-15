import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const AutoPopupModal = () => {
  const [show, setShow] = useState(false);
  const { continueAsGuest, isGuest, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Auto-show after 5 sec
  useEffect(() => {
    if (!user && !isGuest) {
      const timer = setTimeout(() => setShow(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [user, isGuest]);

  const handleClose = () => setShow(false);

  const handleLogin = () => {
    setShow(false);
    navigate("/login");
  };

  const handleRegister = () => {
    setShow(false);
    navigate("/register");
  };

  const handleGuest = () => {
    continueAsGuest();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "400px" }}>
        <div
          className="modal-content text-center"
          style={{
            backgroundColor: "#222426",
            border: `1px solid #c59d5f`,
            color: "#dddddd",
            borderRadius: "15px",
          }}
        >
          <div className="modal-header border-0 justify-content-center">
            <h5 className="modal-title" style={{ color: "#c59d5f" }}>
              Welcome to LuxuryStay
            </h5>
          </div>
          <div className="modal-body">
            <p>Continue your journey with us by choosing an option below:</p>

            <div className="d-grid gap-2 mt-4">
              <button
                className="btn"
                style={{
                  backgroundColor: "#c59d5f",
                  color: "#fff",
                  borderRadius: "10px",
                }}
                onClick={handleLogin}
              >
                Login
              </button>

              <button
                className="btn"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #c59d5f",
                  color: "#c59d5f",
                  borderRadius: "10px",
                }}
                onClick={handleRegister}
              >
                Register
              </button>

              <button
                className="btn btn-secondary"
                style={{
                  backgroundColor: "#333",
                  color: "#fff",
                  borderRadius: "10px",
                }}
                onClick={handleGuest}
              >
                Continue as Guest
              </button>
            </div>
          </div>

          <div className="modal-footer border-0 justify-content-center">
            <button
              className="btn btn-sm"
              style={{
                color: "#888",
                background: "none",
                border: "none",
              }}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPopupModal;


// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";

// const AutoPopupModal = () => {
//   const [show, setShow] = useState(false);
//   const { continueAsGuest, isGuest, user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // ⏰ Auto show modal after 5 seconds (if user not logged in or guest)
//   useEffect(() => {
//     if (!user && !isGuest) {
//       const timer = setTimeout(() => setShow(true), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [user, isGuest]);

//   const handleClose = () => setShow(false);

//   const handleLogin = () => {
//     setShow(false);
//     navigate("/login");
//   };

//   const handleRegister = () => {
//     setShow(false);
//     navigate("/register");
//   };

//   const handleGuest = () => {
//     continueAsGuest();
//     setShow(false);
//   };

//   if (!show) return null;

//   return (
//     <div
//       className="modal fade show d-block"
//       tabIndex="-1"
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.75)",
//         backdropFilter: "blur(5px)",
//       }}
//     >
//       <div
//         className="modal-dialog modal-dialog-centered"
//         style={{ maxWidth: "400px" }}
//       >
//         <div
//           className="modal-content text-center"
//           style={{
//             backgroundColor: "#222426",
//             border: `1px solid #c59d5f`,
//             color: "#dddddd",
//             borderRadius: "15px",
//           }}
//         >
//           <div className="modal-header border-0 justify-content-center">
//             <h5 className="modal-title" style={{ color: "#c59d5f" }}>
//               Welcome to LuxuryStay
//             </h5>
//           </div>
//           <div className="modal-body">
//             <p>Continue your journey with us by choosing an option below:</p>

//             <div className="d-grid gap-2 mt-4">
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: "#c59d5f",
//                   color: "#fff",
//                   borderRadius: "10px",
//                 }}
//                 onClick={handleLogin}
//               >
//                 Login
//               </button>

//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "1px solid #c59d5f",
//                   color: "#c59d5f",
//                   borderRadius: "10px",
//                 }}
//                 onClick={handleRegister}
//               >
//                 Register
//               </button>

//               <button
//                 className="btn btn-secondary"
//                 style={{
//                   backgroundColor: "#333",
//                   color: "#fff",
//                   borderRadius: "10px",
//                 }}
//                 onClick={handleGuest}
//               >
//                 Continue as Guest
//               </button>
//             </div>
//           </div>

//           <div className="modal-footer border-0 justify-content-center">
//             <button
//               className="btn btn-sm"
//               style={{
//                 color: "#888",
//                 background: "none",
//                 border: "none",
//               }}
//               onClick={handleClose}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AutoPopupModal;
