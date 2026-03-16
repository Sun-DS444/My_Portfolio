import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Electrical Engineering</h4>
                <h5>Geetanjali Institute of Technical College</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              B.Tech Electrical Engineering – 83.5% (2018-2022) <br />
              Intermediate – 81.00% (2016-2018) @ Shishu bharti senior secondary school<br />
              High School – 74% (2014-2016) @ Vivekananda Glorious Secondary School
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Last Semester Trainee</h4>
                <h5>Secure Meters Ltd.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Automated data synchronization processes using Python, improving operational
              efficiency. Validated system functionality during deployments and performed manual testing
              of mobile/web applications, APIs, and agile methodologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>QA Automation Engineer</h4>
                <h5>Secure Meters Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and automated test plans for web/mobile apps using Python and PyTest.
              Handled AMISP system integrations (ETL, HES), utilizing Postman, JMeter, Zabbix, Power BI.
              Gained hands-on knowledge of Power Substation systems.
              Optimized Jenkins CI/CD pipelines, lowering test execution times,
              and led the development of reusable test frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
