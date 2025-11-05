import React from "react";

function ChatBox() {
  return (
    <div className="chatbox">
      <div className="chatbox-close"></div>
      <div className="custom-tab-1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#notes">
              Notes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#alerts">
              Alerts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#chat">
              Chat
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          <div className="tab-pane fade active show" id="chat" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
              <div className="card-header chat-list-header text-center">
                <div>
                  <h6 className="mb-1">Chat List</h6>
                  <p className="mb-0">Show All</p>
                </div>
              </div>

              <div className="card-body contacts_body p-0 dz-scroll">
                <ul className="contacts">
                  <li className="name-first-letter">A</li>
                  <li className="active dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="/admin-images/avatar/1.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Archie Parker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  {/* … aur baki list similarly jaayegi */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
