import React from "react";
import "./SpotAPlace.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import EXIF from "exif-js";

const image = <FontAwesomeIcon icon={faImage} style={{ color: "#00C4CC" }} />;

class FileInput extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
      uploadText: "Choose a photo",
    };
  }

  onChange(e) {
    this.setState({ uploadText: "Uploading ↺" });
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    Axios.post("/spotaphoto/upload", uploadData).then((res) => {
      console.log(res.data);
      this.props.handleFile(res.data);
      this.setState({ uploadText: "Uploaded ✔" });
    });
    //

    function ConvertDMSToDD(degrees, minutes, seconds, direction) {
      const dd = degrees + minutes / 60 + seconds / 3600;

      if (direction === "S" || direction === "W") {
        dd = dd * -1;
      }

      return dd;
    }
    console.log(this.state.files);
    if (this.state.files) {
      EXIF.getData(this.state.files, function () {
        const exifData = EXIF.pretty(this);
        if (exifData) {
          let myData = this.state.files;

          // console.log(myData.exifdata);

          // Calculate latitude decimal
          const latDegree = myData.exifdata.GPSLatitude[0].numerator;
          const latMinute = myData.exifdata.GPSLatitude[1].numerator;
          const latSecond = myData.exifdata.GPSLatitude[2].numerator;
          const latDirection = myData.exifdata.GPSLatitudeRef;

          const latFinal = ConvertDMSToDD(
            latDegree,
            latMinute,
            latSecond,
            latDirection
          );
          console.log(latFinal);

          // Calculate longitude decimal
          const lonDegree = myData.exifdata.GPSLongitude[0].numerator;
          const lonMinute = myData.exifdata.GPSLongitude[1].numerator;
          const lonSecond = myData.exifdata.GPSLongitude[2].numerator;
          const lonDirection = myData.exifdata.GPSLongitudeRef;

          const lonFinal = ConvertDMSToDD(
            lonDegree,
            lonMinute,
            lonSecond,
            lonDirection
          );
          console.log(lonFinal);
        }
      });
    }

    //
  }

  removeFile(f) {
    this.setState({ files: this.state.files.filter((x) => x !== f) });
  }

  render() {
    return (
      <div className="FileUploadContainer">
        <label className="FileUpload">
          <input
            type="file"
            name="photo"
            data-cloudinary-field="image_id"
            onChange={(event) => this.onChange(event)}
          />
          <i>{image}</i>
          {this.state.uploadText}
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
