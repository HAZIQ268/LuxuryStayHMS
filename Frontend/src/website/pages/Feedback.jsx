import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Feedback() {
  const [feedback, setFeedback] = useState({ rating: 0, comment: "" });
  const [hover, setHover] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.rating === 0) {
      alert("Please select a rating!");
      return;
    }
    alert(`⭐ Thanks for your feedback!\nRating: ${feedback.rating}\nComment: ${feedback.comment}`);
    setFeedback({ rating: 0, comment: "" });
  };

  return (
    <>
      <div className="page-title light-background">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Feedback</li>
            </ol>
          </nav>
          <h1>Feedback</h1>
        </div>
      </div>

      {/* Feedback Section */}
      <section id="feedback" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="contact-form-card p-5 shadow rounded-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-center mb-3">Guest Feedback</h2>
                <p className="text-center text-muted mb-4">
                  We value your opinion — rate your experience with us!
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Star Rating */}
                  <div className="mb-4 text-center">
                    <label className="form-label fw-bold mb-2">Your Rating</label>
                    <div>
                      {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                          <span
                            key={ratingValue}
                            style={{
                              cursor: "pointer",
                              fontSize: "2rem",
                              color:
                                ratingValue <= (hover || feedback.rating)
                                  ? "#FFD700"
                                  : "#ccc",
                              transition: "color 0.2s",
                            }}
                            onClick={() =>
                              setFeedback({ ...feedback, rating: ratingValue })
                            }
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>
                    {feedback.rating > 0 && (
                      <p className="mt-2 fw-semibold">
                        You rated: {feedback.rating} / 5
                      </p>
                    )}
                  </div>

                  {/* Comment Box */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Your Feedback</label>
                    <textarea
                      className="form-control shadow-sm"
                      name="comment"
                      placeholder="Write your comments here..."
                      rows="5"
                      value={feedback.comment}
                      onChange={(e) =>
                        setFeedback({ ...feedback, comment: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-2 rounded-pill"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;
