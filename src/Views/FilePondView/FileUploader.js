import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import "../FilePondView/FilePond.css";
import TimePickerComponent from "../TimePickerView/TimePickerComponent";

registerPlugin(FilePondPluginImagePreview);

const FileUploader = () => {
  return (
    <React.Fragment>
      <div className="Post">
        <div className="TimePickerComponent">
          <TimePickerComponent />
        </div>
        <div class="FileUploaderComponent">
          <FilePond allowMultiple={true} />{" "}
        </div>
        <div class="grid-item3"></div>
      </div>
    </React.Fragment>
  );
};

export default FileUploader;
