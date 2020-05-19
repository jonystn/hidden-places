import React from "react";
import "./SpotAPlace.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const image = <FontAwesomeIcon icon={faImage} style={{ color: "#9eb85d" }} />;

class FileInput extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

  removeFile(f) {
    this.setState({ files: this.state.files.filter((x) => x !== f) });
  }

  render() {
    return (
      <div className="FileUploadContainer">
        <label className="FileUpload">
          <input type="file" multiple onChange={this.onChange} />
          <i>{image}</i> Chose photo
        </label>
        {this.state.files.map((x) => (
          <div className="FilePreview" onClick={this.removeFile.bind(this, x)}>
            {x.name}
          </div>
        ))}
      </div>
    );
  }
}

export default FileInput;
