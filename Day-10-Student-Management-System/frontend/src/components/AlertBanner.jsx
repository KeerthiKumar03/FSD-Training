function AlertBanner() {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show text-center mb-0"
      role="alert"
    >
      📢 Admissions Open for 2026! Register Now.

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
}

export default AlertBanner;