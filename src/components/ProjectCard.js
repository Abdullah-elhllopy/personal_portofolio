import { Col } from "react-bootstrap";

export const ProjectCard = ({ source_url, url, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={url} target="_blank">Live Preview</a>
          {
            source_url && <a href={source_url} target="_blank">Source Code</a>
          }
        </div>
      </div>
    </Col>
  )
}
