import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>TEST AUTOMATION & STRATEGY</h3>
              <h4>Design & Framework Development</h4>
              <p>
                From Automated Test Suite Design and RTMs to Custom Frameworks in Python.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python Test Automation</div>
                <div className="what-tags">PyTest & PyUnit</div>
                <div className="what-tags">Selenium WebDriver</div>
                <div className="what-tags">PyAutoGUI</div>
                <div className="what-tags">Requirement Traceability</div>
                <div className="what-tags">Test Strategy & Planning</div>
                <div className="what-tags">Factory Acceptance Testing</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CI/CD & SYSTEM VALIDATION</h3>
              <h4>End-to-End Testing & Deployment</h4>
              <p>
                Validating mobile, web, and APIs through functional, integration, and CI/CD pipelines.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Jenkins Pipelines</div>
                <div className="what-tags">Docker Containers</div>
                <div className="what-tags">Appium & XCUI Test</div>
                <div className="what-tags">API Testing</div>
                <div className="what-tags">Agile & JIRA Logging</div>
                <div className="what-tags">HES & MDM Testing</div>
                <div className="what-tags">Log Analysis & Debugging</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA & PERFORMANCE</h3>
              <h4>ETL and Consistency</h4>
              <p>
                Ensuring data integrity through deep database knowledge and load testing.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SQL & PostgreSQL</div>
                <div className="what-tags">ETL Validation</div>
                <div className="what-tags">Load & Stress Testing</div>
                <div className="what-tags">NoSQL Database</div>
                <div className="what-tags">Qdrant Vector Database</div>
                <div className="what-tags">Stored Procedures & Views</div>
                <div className="what-tags">Regression Testing</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 3)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PORTAL & BACKEND</h3>
              <h4>Development Exposure</h4>
              <p>
                Extending testing skills into UI, API, Database Integration, and cutting-edge LLMs.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Web Portal Development</div>
                <div className="what-tags">UI Integration</div>
                <div className="what-tags">LLM Backend Components</div>
                <div className="what-tags">Database Integration</div>
                <div className="what-tags">API Integration</div>
                <div className="what-tags">Site Acceptance Testing</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
