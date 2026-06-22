import campus from "../assets/images/campus.jfif";
import students from "../assets/images/students.jfif";
import placements from "../assets/images/placements.jfif";

function CarouselSection() {
  return (
    <section className="container py-5">
      <div
        id="academyCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded shadow">

          <div className="carousel-item active">
            <img
              src={campus}
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={students}
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={placements}
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default CarouselSection;