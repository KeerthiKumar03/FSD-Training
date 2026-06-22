function LoginModal() {
  return (
    <div className="modal fade" id="loginModal" tabIndex="-1">

      <div className="modal-dialog">

        <div className="modal-content">

          <div className="modal-header">

            <h5 className="modal-title">
              Student Login
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>

          </div>

          <div className="modal-body">

            <form>

              <div className="mb-3">
                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                />
              </div>

              <button className="btn btn-primary w-100">
                Login
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginModal;