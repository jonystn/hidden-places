import React from "react";
import { render } from "react-dom";
import "./SpotAPlace.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";


const image = <FontAwesomeIcon icon={faImage} style={{ color: "#9eb85d" }} />;

class FileInput extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
      uploadText: "Chose photo"
    };
  }

  onChange(e) {
    this.setState({ uploadText: "uploading.." });
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    Axios.post("/spotaphoto/upload", uploadData).then(res => {
      console.log(res.data);
      this.props.handleFile(res.data);
      this.setState({ uploadText: "uploaded" });
    })
    
  }

  removeFile(f) {
    this.setState({ files: this.state.files.filter((x) => x !== f) });
  }

  render() {
    return (
      <div className="FileUploadContainer">
        <label className="FileUpload">
          <input type="file"
           name="photo"
           data-cloudinary-field = "image_id" 
           onChange={(event) => this.onChange(event)} />
          <i>{image}</i>{this.state.uploadText}
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
