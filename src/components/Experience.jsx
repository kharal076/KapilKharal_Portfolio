import { useState } from "react";
import data from "../data/index.json";

const Experience = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    
    <section id="Experience" className="Experience--section">
      <div>
      <h2 className="Experience--title">Experience </h2>
      </div>

    <div className="Experience--container">
      
      <div className="Experience--column">
        {data?.data?.map((item) => (
          <div className="col-md-5 mb-4" key={item.id}>
            <div
              className="card position-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button
                  className="btn btn-primary position-absolute top-0 start-0 rounded-circle"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  +
                </button>
                {hoveredId === item.id && (
                  <div
                    className="border rounded p-3 mt-3"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <p><strong>Company:</strong> {item.company}</p>
                    <p><strong>Certificate:</strong> {item.certificate}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    </section>);
  
};

export default Experience;
