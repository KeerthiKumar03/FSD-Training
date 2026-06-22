import studentReg from "../assets/images/studentReg.jfif";
import attendanceManage from "../assets/images/attendanceManage.png";
import resultsManage from "../assets/images/resultsManage.png";

function ManagementCards() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Our Management System
          </h2>

          <p className="text-muted">
            Streamline administrative workflows with our integrated academic
            modules.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={studentReg} className="card-img-top" />
              <div className="card-body">
                <h5>Student Registration</h5>
                <p>Easily register new students.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={attendanceManage} className="card-img-top" />
              <div className="card-body">
                <h5>Attendance Management</h5>
                <p>Track and manage attendance records.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={resultsManage} className="card-img-top" />
              <div className="card-body">
                <h5>Result Management</h5>
                <p>Manage grades efficiently.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ManagementCards;