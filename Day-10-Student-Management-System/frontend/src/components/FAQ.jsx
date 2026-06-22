function FAQ() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">
        Frequently Asked Questions
      </h2>

      <div className="accordion">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#q1"
            >
              How do I register?
            </button>
          </h2>

          <div id="q1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Fill out the registration form and submit.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#q2"
            >
              How can I check attendance?
            </button>
          </h2>

          <div id="q2" className="accordion-collapse collapse">
            <div className="accordion-body">
              Login to dashboard to view attendance.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;