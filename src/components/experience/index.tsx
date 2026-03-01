import "./Experience.scss";
import { experiences } from "./experience.ts";

const Experience = () => {
  return (
    <div id="experienceSection">
      <div className="heading">
        <h1>Experience</h1>
        <p className="heading-sub">My professional journey so far</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" />

        {experiences.map((job, index) => (
          <div
            key={job.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Dot on timeline */}
            <div className={`timeline-dot ${job.current ? "dot-active" : ""}`}>
              {job.current && <span className="dot-pulse" />}
            </div>

            {/* Card */}
            <div className="timeline-card">
              <div className="card-header">
                <div className="card-header-left">
                  <h3 className="card-role">{job.role}</h3>

                  <p className="card-company">
                    {job.company}
                    <span className="card-separator">·</span>
                    {job.location}
                  </p>
                </div>

                <div className="card-header-right">
                  <span className="card-duration">{job.duration}</span>

                  <span className="card-type">{job.type}</span>
                </div>
              </div>

              <p className="card-description">{job.description}</p>

              <div className="card-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
