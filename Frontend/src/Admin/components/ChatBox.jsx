import React from "react";

const ChatBox = () => {
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

        <div className="tab-content">
          {/* ================= CHAT TAB ================= */}
          <div className="tab-pane fade active show" id="chat" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
              <div className="card-header chat-list-header text-center">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(12,12) rotate(-270) translate(-12,-12)"
                        x="4"
                        y="11"
                        width="16"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 className="mb-1">Chat List</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <circle fill="#000000" cx="5" cy="12" r="2" />
                      <circle fill="#000000" cx="12" cy="12" r="2" />
                      <circle fill="#000000" cx="19" cy="12" r="2" />
                    </g>
                  </svg>
                </a>
              </div>

              {/* Chat List */}
              <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body">
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
                  {/* ...repeat other user list items same as HTML... */}
                </ul>
              </div>
            </div>

            {/* Chat Conversation */}
            <div className="card chat dz-chat-history-box d-none">
              <div className="card-header chat-list-header text-center">
                <a href="#" className="dz-chat-history-back">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(15,12) scale(-1,1) rotate(-90) translate(-15,-12)"
                        x="14"
                        y="7"
                        width="2"
                        height="10"
                        rx="1"
                      />
                      <path
                        d="M3.7071,15.7071C3.3166,16.0976,2.6834,16.0976,2.2929,15.7071C1.9024,15.3166,1.9024,14.6834,2.2929,14.2929L8.2929,8.2929C8.6715,7.9143,9.2811,7.9011,9.6757,8.2628L15.6757,13.7628C16.0828,14.136,16.1103,14.7686,15.7372,15.1757C15.364,15.5828,14.7314,15.6103,14.3243,15.2372L9.03,10.3841L3.7071,15.7071Z"
                        fill="#000000"
                        fillRule="nonzero"
                        transform="translate(9,12) scale(-1,-1) rotate(90) translate(-9,-12)"
                      />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 className="mb-1">Chat with Khelesh</h6>
                  <p className="mb-0 text-success">Online</p>
                </div>

                <div className="dropdown">
                  <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="#000000" cx="5" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="19" cy="12" r="2" />
                      </g>
                    </svg>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">
                      <i className="fa fa-user-circle text-primary me-2"></i> View profile
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-users text-primary me-2"></i> Add to friends
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-plus text-primary me-2"></i> Add to group
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-ban text-primary me-2"></i> Block
                    </li>
                  </ul>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="/admin-images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>

                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid, I am good thanks, how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="/admin-images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                {/* You can repeat similar blocks for the rest of the conversation */}
              </div>

              <div className="card-footer type_msg">
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message..."
                  ></textarea>
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary">
                      <i className="fa fa-location-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= ALERTS TAB ================= */}
          <div className="tab-pane fade" id="alerts" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
              <div className="card-header chat-list-header text-center">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <circle fill="#000000" cx="5" cy="12" r="2" />
                      <circle fill="#000000" cx="12" cy="12" r="2" />
                      <circle fill="#000000" cx="19" cy="12" r="2" />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 className="mb-1">Notications</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </a>
              </div>

              <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
                <ul className="contacts">
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">KK</div>
                      <div className="user_info">
                        <span>David Nester Birthday</span>
                        <p className="text-primary">Today</p>
                      </div>
                    </div>
                  </li>

                  <li className="name-first-letter">SOCIAL</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont success">RU</div>
                      <div className="user_info">
                        <span>Perfection Simplified</span>
                        <p>Jame Smith commented on your status</p>
                      </div>
                    </div>
                  </li>

                  <li className="name-first-letter">SEVER STATUS</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">AU</div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont info">MO</div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-footer"></div>
            </div>
          </div>


          {/* ================= NOTES TAB ================= */}

          <div className="tab-pane fade" id="notes">
            <div className="card mb-sm-3 mb-md-0 note_card">
              <div className="card-header chat-list-header text-center">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(12, 12) rotate(-270) translate(-12, -12)"
                        x="4"
                        y="11"
                        width="16"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </a>

                <div>
                  <h6 className="mb-1">Notes</h6>
                  <p className="mb-0">Add New Nots</p>
                </div>

                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </a>
              </div>

              <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
                <ul className="contacts">
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>New order placed..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1">
                          <i className="fa fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Youtube, a video-sharing website..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1">
                          <i className="fa fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>john just buy your product..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1">
                          <i className="fa fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="btn btn-primary btn-xs sharp me-1">
                          <i className="fa fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
